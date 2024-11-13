import User from '../models/UserSchema.js'
import Doctor from '../models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


// generate token function
const generateToken = user => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET_KEY
    )
}


// user registration function
export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body
    try {
        let user = null
        if (role === 'patient') {
            user = await User.findOne({ email })
        }
        else if (role === 'doctor') {
            user = await Doctor.findOne({ email })
        }

        // check if user is already exist or not
        if (user) {
            return res.status(400).json({
                message: 'User already exist'
            })
        }

        // hash the user password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // create new user based on the role
        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }
        if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()

        res.status(200).json({
            success: true,
            message: 'User created successfully.'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Oopss...Some internal error has occured. Please Try Again !'
        })
    }
}


// user login function
export const login = async (req, res) => {
    const { email } = req.body
    try {
        let user = null
        const patient = await User.findOne({ email })
        const doctor = await Doctor.findOne({ email })

        if (patient) {
            user = patient
        }
        if (doctor) {
            user = doctor
        }

        // check user is exist or not
        if (!user) {
            return res.status(404).json({
                message: 'User not found :('
            })
        }

        // if user found then compare password
        const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordMatch) {
            return res.status(400).json({
                status: false,
                message: 'Invalid credentials'
            })
        }

        // if password match we create authentication token
        const token = generateToken(user)
        const { password, role, appointments, ...rest } = user._doc

        res.status(200).json({
            status: true,
            message: 'Login successfully !',
            token,
            data: { ...rest },
            role
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: 'Failed to login.'
        })
    }
}