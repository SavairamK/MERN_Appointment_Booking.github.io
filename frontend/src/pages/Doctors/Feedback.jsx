import React, { useState } from 'react'
import avatarIcon from '../../assets/images/avatar-icon.png'
import { formateDate } from '../../utils/formatDate'
import { AiFillStar } from 'react-icons/ai'
import FeedbackForm from './FeedbackForm'

const Feedback = ({ reviews, totalRating }) => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false)

    return (
        <>
            <div className="">
                <div className="mb-[50px] -mt-5">
                    <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
                        All reviews ({totalRating})
                    </h4>

                    {
                        reviews?.map((review, index) =>
                        (
                            <div key={index} className="flex justify-between gap-10 mb-[30px]">

                                {/* review starts */}
                                <div className="flex gap-3">
                                    <figure className='w-12 h-12 rounded-full'>
                                        <img src={review?.user?.photo} alt="" className='w-full' />
                                    </figure>

                                    <div className="">
                                        <h5 className="text-[16px] leading-6 text-headingColor font-normal">
                                            {review?.user?.name}
                                        </h5>
                                        <p className="text-[14px] leading-6 text-textColor">
                                            {formateDate(review?.createdAt)}
                                        </p>
                                        <p className="text__para mt-3 font-normal text-[15px]">
                                            {review?.reviewText}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-1">
                                    {
                                        [...Array(review?.rating).keys()].map((_, index) => (
                                            <AiFillStar key={index} color='#0067FF' />
                                        ))
                                    }
                                </div>
                                {/* review ends */}
                            </div>
                        ))

                    }

                </div>

                {/* feedback form starts */}
                {
                    !showFeedbackForm &&
                    <div className="text-center">
                        <button className="btn" onClick={() => setShowFeedbackForm(true)}>
                            Give Feedback
                        </button>
                    </div>
                }

                {
                    showFeedbackForm && <FeedbackForm />
                }
                {/* feedback form ends */}

            </div>
        </>
    )
}

export default Feedback
