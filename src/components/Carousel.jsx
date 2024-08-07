export const Carousel = () => (
  <>
    <section className="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-indigo-600 bg-[url('../../assets/images/bg3.html')] bg-center bg-no-repeat bg-cover">
      <div className="container relative">
        <div className="grid grid-cols-1 md:mt-36 mt-10 text-center">
          {/* <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
            Enhance Customer Engagement with{" "}
            <span className="text-orange-500">AI Chatbots</span>
          </h4> */}
          <h4 className="font-bold text-white lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
            Boost Business with
            <span className="text-orange-500">
              {" "}
              AI Chatbot <br />{" "}
            </span>
            <span className="text-orange-500"> Platform</span>{" "}
          </h4>

          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Drive growth and streamline operations with our AI chatbot
            solutions, designed to enhance customer engagement and boost
            conversions.
            {/* Harness the power of our advanced AI chatbot platform to engage,
            support, and convert your audience like never before. */}
          </p>

          <div className="subcribe-form mt-6 mb-3">
            <form className="relative max-w-xl mx-auto">
              <input
                type="email"
                id="subcribe"
                name="email"
                className="form-input border-0 py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                placeholder="Your Email Address :"
              />
              <button
                type="submit"
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-full"
              >
                Book a Demo <i className="uil uil-arrow-right"></i>
              </button>
            </form>
          </div>

          <span className="text-slate-400 font-medium">
            Need Assistance?{" "}
            <a href="#" className="text-orange-500">
              Contact Us
            </a>
          </span>

          <div className="overflow-hidden mt-8">
            <img
              src="assets/images/application/chatbg.png"
              alt="AI Chatbot Illustration"
            />
          </div>

          {/* <div className="overflow-hidden after:content-[''] after:absolute after:h-14 after:w-14 after:bg-white/20 after:-top-[40px] after:start-[30%] after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

          <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-white/20 after:top-[30%] after:end-[20%] after:rounded-full after:animate-ping"></div>
         */}
        </div>
      </div>
    </section>
   

    <div className="relative">
      <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
        <svg
          className="w-full h-auto scale-[2.0] origin-top"
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </>
);
