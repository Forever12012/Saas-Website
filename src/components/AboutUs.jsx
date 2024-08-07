import { Footer } from "./Footer";
import { Header } from "./Header";

import { Route, Link } from "react-router-dom";

export const AboutUs = () => (
  <>
    {/* Start Navbar */}
    <Header />
    {/*end header*/}
    {/* End Navbar */}
    {/* Start Hero */}
    <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/company/aboutus.html')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 className="mb-6 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
            About Us
          </h3>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            We create intelligent, customized chatbot solutions to enhance user
            engagement, streamline operations, and offer unparalleled support
            experiences.
          </p>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
          <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <Link to={"/home"}>intelliXBot</Link>
          </li>

          <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
            <i className="uil uil-angle-right-b" />
          </li>
          <li
            className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
            aria-current="page"
          >
            About Us
          </li>
        </ul>
      </div>
    </section>
    {/*end section*/}
    <div className="relative">
      <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
        <svg
          className="w-full h-auto scale-[2.0] origin-top"
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
    {/* End Hero */}
    {/* Start Section*/}
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
          <div className="lg:col-span-5 md:col-span-6">
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img
                    src="assets/images/about/ab03.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                  <img
                    src="assets/images/about/ab02.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="grid grid-cols-1 gap-6">
                  <img
                    src="assets/images/about/ab01.jpg"
                    className="shadow rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 md:col-span-6">
            <div className="lg:ms-5">
              <div className="flex mb-4">
                <span className="text-indigo-600 text-2xl font-bold mb-0">
                  <span
                    className="counter-value text-6xl font-bold"
                    data-target={15}
                  >
                    1
                  </span>
                  +
                </span>
                <span className="self-end font-medium ms-2">
                  Years <br /> Experience
                </span>
              </div>
              <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
                About Us
              </h3>
              <p className="text-slate-400 max-w-xl">
                Welcome to our AI chatbot platform! We specialize in creating
                intelligent, customized chatbot solutions designed to empower
                businesses and individuals alike. Our mission is to
                revolutionize the way you interact with technology, providing
                tools that enhance user engagement, streamline operations, and
                offer unparalleled support experiences.
              </p>
              <br />

              <p className="text-slate-400 max-w-xl">
                By integrating our advanced AI technology, you can transform
                your communication strategies and achieve new levels of
                efficiency and effectiveness. Our AI chatbots are tailored to
                meet the unique needs of each client, ensuring a personalized
                and relevant experience for every user. Whether you are looking
                to improve customer service, automate routine tasks, or provide
                real-time assistance, our solutions are built to adapt and scale
                with your business. With features like natural language
                processing, machine learning, and deep learning algorithms, our
                chatbots understand and respond to user queries with precision
                and accuracy, making every interaction meaningful and
                productive. Join us on this journey to innovate and elevate your
                business processes.
              </p>
              <br />
              <p className="text-slate-400 max-w-xl">
                Our platform offers comprehensive analytics to track and measure
                the performance of your chatbots, providing valuable insights
                into user behavior and engagement. Additionally, we offer
                flexible deployment options, including on-premises and
                cloud-based solutions, to suit your specific requirements.
                Experience the future of communication with our competitive
                pricing and seamless human handoff capabilities, ensuring that
                you provide the best possible support to your customers at all
                times. Let us help you harness the power of AI to achieve your
                goals and stay ahead of the competition.
              </p>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
                >
                  <i className="uil uil-envelope"></i> Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      {/* Business Partner */}
      <div className="container relative mt-8">
        <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-[30px]">
          <div className="mx-auto mt-8">
            <img src="assets/images/client/amazon.svg" className="h-6" alt="" />
          </div>
          <div className="mx-auto mt-8">
            <img src="assets/images/client/google.svg" className="h-6" alt="" />
          </div>
          <div className="mx-auto mt-8">
            <img src="assets/images/client/lenovo.svg" className="h-6" alt="" />
          </div>
          <div className="mx-auto mt-8">
            <img src="assets/images/client/paypal.svg" className="h-6" alt="" />
          </div>
          <div className="mx-auto mt-8">
            <img
              src="assets/images/client/shopify.svg"
              className="h-6"
              alt=""
            />
          </div>
          <div className="mx-auto mt-8">
            <img
              src="assets/images/client/spotify.svg"
              className="h-6"
              alt=""
            />
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      {/* Business Partner */}
    </section>
    {/*end section*/}
    {/* End Section*/}
    {/* Start */}
    <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            Key Features
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Discover the powerful features of our customized AI chatbot platform
            designed to enhance user engagement and streamline your operations.
          </p>
        </div>
        {/*end grid*/}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] mt-8">
          <div className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
              <i data-feather="message-square" className="size-5 rotate-45" />
            </div>
            <div className="flex-1">
              <h4 className="mb-0 text-lg font-medium">
                Customized Ai Chatbot
              </h4>
            </div>
          </div>
          <div className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
              <i data-feather="bar-chart" className="size-5 rotate-45" />
            </div>
            <div className="flex-1">
              <h4 className="mb-0 text-lg font-medium">Chatbot Analytics</h4>
            </div>
          </div>
          <div className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
              <i data-feather="cloud" className="size-5 rotate-45" />
            </div>
            <div className="flex-1">
              <h4 className="mb-0 text-lg font-medium">
                On-Prem & Cloud Deployment
              </h4>
            </div>
          </div>
          <div className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
              <i data-feather="dollar-sign" className="size-5 rotate-45" />
            </div>
            <div className="flex-1">
              <h4 className="mb-0 text-lg font-medium">Competitive Pricing</h4>
            </div>
          </div>
          <div className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
              <i data-feather="user-plus" className="size-5 rotate-45" />
            </div>
            <div className="flex-1">
              <h4 className="mb-0 text-lg font-medium">Human Handoff</h4>
            </div>
          </div>

          <div className="flex duration-500 hover:scale-105 shadow dark:shadow-gray-800 hover:shadow-md dark:hover:shadow-gray-700 ease-in-out items-center p-3 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-center h-[45px] min-w-[45px] -rotate-45 bg-gradient-to-r from-transparent to-indigo-600/10 text-indigo-600 text-center rounded-full me-3">
              <i data-feather="user-plus" className="size-5 rotate-45" />
            </div>
            <div className="flex-1">
              <h4 className="mb-0 text-lg font-medium">24*7 Support</h4>
            </div>
          </div>
        </div>
        {/*end grid*/}
        {/* <div className="grid grid-cols-1 justify-center">
      <div className="mt-6 text-center">
        <a
          href="page-services.html"
          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md me-2 mt-2"
        >
          See More <i className="uil uil-arrow-right" />
        </a>
      </div>
    </div> */}
      </div>
      {/*end container*/}
    </section>
    {/*end section*/}
    {/* End */}
    {/* Start */}
    {/* <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800 md:pt-0 pt-0">
      <div className="container relative">
        <div className="grid grid-cols-1 justify-center">
          <div className="relative z-1">
            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
              <div className="lg:col-start-2 lg:col-span-10">
                <div className="relative">
                  <img
                    src="assets/images/cta-bg.jpg"
                    className="rounded-md shadow-lg"
                    alt=""
                  />
                  <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                    <a
                      href="#!"
                      data-type="youtube"
                      data-id="S_CGed6E610"
                      className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white"
                    >
                      <i className="mdi mdi-play inline-flex items-center justify-center text-2xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="content md:mt-8">
              <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                <div className="lg:col-start-2 lg:col-span-10">
                  <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                    <div className="mt-8">
                      <div className="section-title text-md-start">
                        <h6 className="text-white/50 text-lg font-semibold">
                          Team
                        </h6>
                        <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-white mt-2">
                          Meet Experience <br /> Team Member
                        </h3>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="section-title text-md-start">
                        <p className="text-white/50 max-w-xl mx-auto mb-2">
                          Start working with Techwind that can provide
                          everything you need to generate awareness, drive
                          traffic, connect.
                        </p>
                        <a href="#" className="text-white">
                          Read More{" "}
                          <i className="uil uil-angle-right-b align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*end row */}
    {/* </div> */}
    // {/*end container*/}
    {/* <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-indigo-500 to-indigo-600" /> */}
    {/* // </section> */}
    {/* } */}
    {/*end section*/}
    {/* End */}
    {/* Start */}
    {/*end section*/}
    {/* End */}
    {/* Footer Start */}
    <Footer />
    {/* LTR & RTL Mode Code */}
    <div className="fixed top-[40%] -right-3 z-50">
      <a href="#" id="switchRtl">
        <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-bold rtl:block ltr:hidden">
          LTR
        </span>
        <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-bold ltr:block rtl:hidden">
          RTL
        </span>
      </a>
    </div>
  </>
);
