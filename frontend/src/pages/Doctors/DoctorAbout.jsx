import React from 'react'
import { formateDate } from '../../utils/formatDate'

const DoctorAbout = ({ name, about, qualifications, experiences }) => {
    return (
        <>
            <div className="">
                <div className="-mt-5">
                    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                        About
                        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
                            {name}
                        </span>
                    </h3>

                    <p className="text__para">
                        {about}
                    </p>
                </div>

                {/* education section starts */}
                <div className="mt-12">
                    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                        Education
                    </h3>

                    <ul className="pt-4 md:p-5">
                        {
                            qualifications?.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
                                    <div className="">
                                        <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                            {/* month-date-year */}
                                            {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                                        </span>
                                        <p className="text-[15px] leading-6 font-medium text-textColor">
                                            {item.degree}
                                        </p>
                                    </div>
                                    <p className="text-[14px] leading-5 font-medium text-textColor">
                                        {item.university}
                                    </p>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                {/* education section ends */}


                {/* experience section starts */}
                <div className="mt-12">
                    <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
                        Experience
                    </h3>

                    <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                        {
                            experiences?.map((item, index) => (
                                <li
                                    key={index}
                                    className="p-4 rounded bg-[#f4ebd7]">
                                    <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                                        {/* month-date-year */}
                                        {formateDate(item.startingDate)} - {formateDate(item.endingDate)}
                                    </span>
                                    <p className="text-[16px] leading-6 font-medium text-textColor">
                                        {item.position}
                                    </p>
                                    <p className="text-[14px] leading-5 font-light text-textColor">
                                        {item.hospital}
                                    </p>
                                </li>
                            ))
                        }

                    </ul>
                </div>
                {/* experience section ends */}
            </div>
        </>
    )
}

export default DoctorAbout
