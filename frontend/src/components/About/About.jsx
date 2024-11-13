import React from 'react'
import about from '../../assets/images/about.png'
import aboutCard from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* img */}
                <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={about} alt="" />
                    <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                        <img src={aboutCard} alt="" />
                    </div>
                </div>

                {/* about content starts */}
                <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                    <h2 className="heading">
                        Proud To Be One Of The Nation's Best !
                    </h2>
                    <p className="text__para">
                        For 30 years in a row, U.S. News and World Report has recognized us as one of the best public hospitals in the nation and #1 in Texas.
                    </p>
                    <p className="text__para mt-[30px]">
                        Our best is something we strive for each day, caring for our patients, not looking back at what we accomplished but towards that we can do tomorrow. Providing our best.
                    </p>
                    <Link to='/'>
                        <button className="btn">Learn more about me.</button>
                    </Link>
                </div>
                {/* about content ends */}
            </div>
        </div>
    </section>
    </>
  )
}

export default About
