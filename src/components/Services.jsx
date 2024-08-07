import { Footer } from "./Footer";

export const Services = () => (
  <>
    {/* Start Navbar */}
    <nav id="topnav" className="defaultscroll is-sticky">
      {/*end container*/}
    </nav>
    {/*end header*/}
    {/* End Navbar */}
    {/* Start Hero */}
    <section className="relative table w-full py-36 lg:py-44 bg-[url('../../assets/images/services.html')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center mt-10">
          <h5 className="text-white/50 text-lg font-medium">What We Offer ?</h5>
          <h3 className="mt-2 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
            Our Services
          </h3>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
          <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <a href="index.html">intelliXBot</a>
          </li>

          <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
            <i className="uil uil-angle-right-b" />
          </li>
          <li
            className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
            aria-current="page"
          >
            Services
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
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
            <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i className="uil uil-airplay" />
            </div>
            <div className="content mt-7">
              <a
                href="page-services.html"
                className="title h5 text-lg font-medium hover:text-indigo-600"
              >
                UX / UI Design
              </a>
              <p className="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <div className="mt-5">
                <a
                  href="page-services.html"
                  className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
            <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i className="uil uil-shutter" />
            </div>
            <div className="content mt-7">
              <a
                href="page-services.html"
                className="title h5 text-lg font-medium hover:text-indigo-600"
              >
                IOS App Designer
              </a>
              <p className="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <div className="mt-5">
                <a
                  href="page-services.html"
                  className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
            <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i className="uil uil-camera-plus" />
            </div>
            <div className="content mt-7">
              <a
                href="page-services.html"
                className="title h5 text-lg font-medium hover:text-indigo-600"
              >
                Photography
              </a>
              <p className="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <div className="mt-5">
                <a
                  href="page-services.html"
                  className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
            <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i className="uil uil-flower" />
            </div>
            <div className="content mt-7">
              <a
                href="page-services.html"
                className="title h5 text-lg font-medium hover:text-indigo-600"
              >
                Graphic Designer
              </a>
              <p className="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <div className="mt-5">
                <a
                  href="page-services.html"
                  className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
            <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i className="uil uil-cog" />
            </div>
            <div className="content mt-7">
              <a
                href="page-services.html"
                className="title h5 text-lg font-medium hover:text-indigo-600"
              >
                Web Security
              </a>
              <p className="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <div className="mt-5">
                <a
                  href="page-services.html"
                  className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
            <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
              <i className="uil uil-comment" />
            </div>
            <div className="content mt-7">
              <a
                href="page-services.html"
                className="title h5 text-lg font-medium hover:text-indigo-600"
              >
                24/7 Support
              </a>
              <p className="text-slate-400 mt-3">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <div className="mt-5">
                <a
                  href="page-services.html"
                  className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}

      {/*end container*/}

      {/*end container*/}
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center">
          <h6 className="text-indigo-600 text-sm font-bold mb-2">
            Available for freelance projects
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Do you have digital project? <br /> Let's talk.
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
          <div className="mt-6">
            <a
              href="contact-one.html"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-4"
            >
              <i className="uil uil-phone" /> Contact us
            </a>
          </div>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>
    {/*end section*/}
    {/* End Section*/}

    <Footer />
    {/* Back to top */}
    <a
      href="#"
      onclick="topFunction()"
      id="back-to-top"
      className="back-to-top fixed hidden text-lg rounded-full z-10 bottom-5 end-5 size-9 text-center bg-indigo-600 text-white leading-9"
    >
      <i className="uil uil-arrow-up" />
    </a>
    {/* Back to top */}

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
