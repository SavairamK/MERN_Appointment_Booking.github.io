import React from 'react'

const Contact = () => {
  return (
    <>
      <section className="">
        <div className="px-4 mx-auto max-w-screen-md">
          <h2 className="heading text-center">
            Contact Us
          </h2>
          <p className="text__para mb-8 lg:mb-16 font-light text-center">
            Got any issue ? Want to contact us ? <br /> Let us know !
          </p>

          <form action='#' className='space-y-8'>
            <div className="">
              <label htmlFor="email" className="form__label">
                Your Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder='example@gmail.com'
                className='form__input mt-1'
                required
              />
            </div>
            <div className="">
              <label htmlFor="subject" className="form__label">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder='What is the problem about ?'
                className='form__input mt-1'
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form__label">
                Your Message
              </label>
              <textarea
                rows='6'
                type="text"
                name="message"
                placeholder='Your message for us :)'
                className='form__input mt-1'
                required
              />
            </div>

            <button type='submit' className="btn rounded sm:w-fit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
