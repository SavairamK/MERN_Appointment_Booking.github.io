import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/user.js'
import doctorRoute from './routes/doctor.js'
import reviewRoute from './routes/review.js'
import bookingRoute from './routes/booking.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin: true
}

app.get('/', (req, res) => {
    res.send("Server is running successfully !")
})

// db connection
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to DB successfully !')
    } catch (error) {
        console.log('Oopss...Some error has occured while DB connection :(')
    }
}

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/doctors', doctorRoute)
app.use('/api/v1/reviews', reviewRoute)
app.use('/api/v1/bookings', bookingRoute)

app.listen(port, () => {
    connectDB()
    console.log("server is running on port", port)
})