import { Footer } from "./Footer";

export const Changelog = () => (
  <>
    {/* Start Navbar */}
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container relative">
        {/* Logo container*/}
        <a className="logo" href="index.html">
          <img
            src="assets/images/logo-dark.png"
            className="inline-block dark:hidden"
            alt=""
          />
          <img
            src="assets/images/logo-light.png"
            className="hidden dark:inline-block"
            alt=""
          />
        </a>
        {/* End Logo container*/}
        <div className="menu-extras">
          <div className="menu-item">
            {/* Mobile menu toggle*/}
            <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
              <div className="lines">
                <span />
                <span />
                <span />
              </div>
            </a>
            {/* End mobile menu toggle*/}
          </div>
        </div>
      </div>
      {/*end container*/}
    </nav>
    {/*end header*/}
    {/* End Navbar */}
    {/* Start Hero */}
    <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
      <div className="container relative">
        <div className="grid grid-cols-1 text-center mt-10">
          <h3 className="text-3xl leading-normal font-medium">Changelog</h3>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
      <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul className="tracking-[0.5px] mb-0 inline-block">
          <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
            <a href="index.html">Techwind</a>
          </li>
          <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
            <i className="uil uil-angle-right-b" />
          </li>
          <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
            <a href="#">Docs</a>
          </li>
          <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180">
            <i className="uil uil-angle-right-b" />
          </li>
          <li
            className="inline-block uppercase text-[13px] font-bold text-indigo-600"
            aria-current="page"
          >
            Changelog
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
        <div className="md:flex justify-center">
          <div className="lg:w-3/4 rounded-md shadow dark:shadow-gray-800 h-fit bg-white dark:bg-slate-900">
            <div className="p-6">
              {/* 2.2.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">2.2.0</span> - 27th
                February 2024
              </h5>
              <ul className="list-none mb-10">
                <li className="my-3 ms-2 text-lg font-bold">
                  <i className="uil uil-window" /> Landing Template
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind CSS v3.4.1
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Material Design Icons
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated height width classes to size-* as per latest
                  tailwindcss
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Life Coach
                  </span>{" "}
                  <span className="text-red-600">(index-life-coach.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Landing Six
                  </span>{" "}
                  <span className="text-red-600">(index-landing-six.html)</span>{" "}
                  demo
                </li>
                <li className="mt-5 mb-3 ms-2 text-lg font-bold">
                  <i className="uil uil-window" /> Admin Dashboard
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind CSS v3.4.1
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest CK Editor Plugin
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Apexcharts Plugin
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Simplebar Plugin
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Material Design Icons
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated height width classes to size-* as per latest
                  tailwindcss
                </li>
              </ul>
              {/* 2.2.0 End */}
              {/* 2.1.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">2.1.0</span> - 30th
                November 2023
              </h5>
              <ul className="list-none mb-10">
                <li className="my-3 ms-2 text-lg font-bold">
                  <i className="uil uil-window" /> Landing Template
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind CSS v3.3.5
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind Form v0.5.7
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Material Design Icons v7.3.67
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Jarallax Pluging (Parallax) v2.1.4
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Christmas
                  </span>{" "}
                  <span className="text-red-600">(index-christmas.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Classic Business
                  </span>{" "}
                  <span className="text-red-600">
                    (index-classic-business.html)
                  </span>{" "}
                  demo
                </li>
                <li className="mt-5 mb-3 ms-2 text-lg font-bold">
                  <i className="uil uil-window" /> Admin Dashboard
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind CSS v3.3.5
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest CK Editor v40.1.0
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Apexcharts v3.44.0
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Simplebar v6.2.5
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind Form v0.5.7
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Material Design Icons v7.3.67
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Jarallax Pluging (Parallax) v2.1.4
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Cryptocurrency Dashboard Template
                  </span>
                </li>
              </ul>
              {/* 2.1.0 End */}
              {/* 2.0.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">2.0.0</span> - 15th
                August 2023
              </h5>
              <ul className="list-none mb-10">
                <li className="my-3 ms-2 text-lg font-bold">
                  <i className="uil uil-window" /> Landing Template
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Ai
                  </span>{" "}
                  <span className="text-red-600">(index-ai.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Podcast
                  </span>{" "}
                  <span className="text-red-600">(index-podcast.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Travels
                  </span>{" "}
                  <span className="text-red-600">(index-travel.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Components
                  </span>{" "}
                  <span className="text-red-600">(components.html)</span> page
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Update and fixed some issues in breadcrumb
                </li>
                <li className="mt-5 mb-3 ms-2 text-lg font-bold">
                  <i className="uil uil-window" /> Admin Dashboard
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">Add : </b>{" "}
                  Added{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Admin Dashboard Template
                  </span>
                </li>
              </ul>
              {/* 2.0.0 End */}
              {/* 1.9.5 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.9.5</span> - 15th
                July 2023
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Tailwind CSS V3.3.3
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Material Design Icons
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Unicons Icons
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Latest Feather Icons
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Button style and add inline css and removed external
                  css (removed components from scss folder)
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Breadcrumbs style and add inline css and removed
                  external css (removed components from scss folder)
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated and removed external css for Footer
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixes : </b>{" "}
                  Fixed Image issues in Personal home demo (Hero Section)
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixes : </b>{" "}
                  Fixed Select 2 form and updated and added inline css for Job
                  hemp demo and Job inner pages
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Studio Home and removed external CSS for Studio Home
                  used
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Startup Home and removed external CSS for Startup Home
                  used
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated Saas Home and removed external CSS for Saas Home used
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">
                    Remove &amp; Fixes :{" "}
                  </b>{" "}
                  Removed and fixed footer css
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated _swiper.scss file for Corporate home demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">Update : </b>{" "}
                  Updated _testi.scss file for Review or Testimonial
                </li>
              </ul>
              {/* 1.9.5 End */}
              {/* 1.9.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.9.0</span> - 9th
                June 2023
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Tailwind CSS V3.3.2
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Software
                  </span>{" "}
                  <span className="text-red-600">(index-software.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Cafe
                  </span>{" "}
                  <span className="text-red-600">(index-cafe.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Spa &amp; Salon
                  </span>{" "}
                  <span className="text-red-600">(index-spa.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Shop / eCommerce
                  </span>{" "}
                  <span className="text-red-600">(index-shop.html)</span> demo
                  (Full Demo)
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Updated &amp; Creted full demo{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    NFT Marketplace
                  </span>{" "}
                  Home demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Added{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    MetaMask for Connect Wallet{" "}
                  </span>{" "}
                  Home demo and add a new pages
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Added New{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Creator Pages for NFT Marketplace{" "}
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Added New{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Job Pages (Job Post &amp; Job Opening / Career) for Job Demo{" "}
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Updated{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    gulpfile.js
                  </span>{" "}
                  file
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Updated{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    package.json
                  </span>{" "}
                  file
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Updated{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    tailwind.config.js
                  </span>{" "}
                  file
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">
                    Removed &amp; Update :{" "}
                  </b>{" "}
                  Removed{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    custom form (@tailwindcss/custom-forms)
                  </span>{" "}
                  and update and added{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    tailwind form (@tailwindcss/forms)
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated &amp; Fixed :{" "}
                  </b>{" "}
                  Fixed some issues in{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    form-checkbox and form-radio
                  </span>{" "}
                  and update code for form-checkbox and form-radio
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">
                    Removed &amp; Update :{" "}
                  </b>{" "}
                  Removed Icons folder in scss and add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Material design icon
                  </span>{" "}
                  from yarn package
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    some Menu issues in small devices (Solved Navbar issues)
                  </span>{" "}
                </li>
              </ul>
              {/* 1.9.0 End */}
              {/* 1.8.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.8.0</span> - 3rd
                April 2023
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Tailwind CSS V3.3.1
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Yoga
                  </span>{" "}
                  <span className="text-red-600">(index-yoga.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Furniture
                  </span>{" "}
                  <span className="text-red-600">(index-furniture.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  As per tailwind, some css updated like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Margin Class, Padding Class, Border Class, and Border Radius
                    Class
                  </span>{" "}
                  Click on documentation{" "}
                  <a
                    href="https://tailwindcss.com/blog/tailwindcss-v3-3"
                    className="text-indigo-600 uppercase font-semibold"
                    target="_blank"
                  >
                    documentation
                  </a>{" "}
                  for more information
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    some responsive issues in small devices
                  </span>{" "}
                </li>
              </ul>
              {/* 1.8.0 End */}
              {/* 1.7.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.7.0</span> - 8th
                February 2023
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Choices Js v10.2.0
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Jarallax Js v2.1.3
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Datepicker Js v5.18.2
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    All Plugins
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Charity
                  </span>{" "}
                  <span className="text-red-600">(index-charity.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Law Firm
                  </span>{" "}
                  <span className="text-red-600">(index-law.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Video
                  </span>{" "}
                  <span className="text-red-600">(index-video.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Forum
                  </span>{" "}
                  <span className="text-red-600">(index-forums.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    One Page
                  </span>{" "}
                  <span className="text-red-600">
                    (index-landing-five.html)
                  </span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Background Images cover issue in all pages
                  </span>{" "}
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Fixed some responsive in DARk &amp; RTL mode issues
                  </span>{" "}
                </li>
              </ul>
              {/* 1.7.0 End */}
              {/* 1.6.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.6.0</span> - 6th
                December 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Tailwind CSS v3.2.4
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add
                  <span className="text-black dark:text-white font-semibold mx-1">
                    RTL version (CSS based)
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Payment
                  </span>{" "}
                  <span className="text-red-600">(index-payment.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Hotel &amp; Resort
                  </span>{" "}
                  <span className="text-red-600">(index-hotel.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    package.json file
                  </span>{" "}
                </li>
              </ul>
              {/* 1.6.0 End */}
              {/* 1.5.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.5.0</span> - 4th
                October 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Classic Application
                  </span>{" "}
                  <span className="text-red-600">(index-classic-app.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Insurance
                  </span>{" "}
                  <span className="text-red-600">(index-insurance.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    IT Solution Two
                  </span>{" "}
                  <span className="text-red-600">
                    (index-it-solution-two.html)
                  </span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Construction
                  </span>{" "}
                  <span className="text-red-600">
                    (index-construction.html){" "}
                  </span>
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Blog Post in Blogs
                  </span>{" "}
                  inner pages like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Standard Post, Slider Post, Gallery Post, Youtube Post,
                    Vimeo Post, Audio Post, Blockquote Post, etc.
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Testimonial Page
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    app.js file
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    gulp.js file
                  </span>{" "}
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-sky-500 font-semibold me-2">Removed : </b>{" "}
                  Remove{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    <b>contact.js</b> file and add contact js in <b>app.js</b>{" "}
                    file
                  </span>
                </li>
              </ul>
              {/* 1.5.0 End */}
              {/* 1.4.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.4.0</span> - 27th
                August 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Tailwind CSS v3.1.8
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Classic Saas
                  </span>{" "}
                  <span className="text-red-600">
                    (index-classic-saas.html)
                  </span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Modern Saas
                  </span>{" "}
                  <span className="text-red-600">(index-modern-saas.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Corporate Two
                  </span>{" "}
                  <span className="text-red-600">
                    (index-corporate-two.html)
                  </span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Consulting Business
                  </span>{" "}
                  <span className="text-red-600">(index-consulting.html) </span>
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Photography
                  </span>{" "}
                  <span className="text-red-600">(index-photography.html)</span>{" "}
                  demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Photography
                  </span>{" "}
                  inner pages like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    About me and Portfolio or Photography Gallery
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-bold mx-1">
                    Blog Template
                  </span>{" "}
                  <span className="text-red-600">(index-blog.html)</span> demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fix some{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    CSS
                  </span>{" "}
                  issues like, buttons, breadcrumb, and some in HTML pages
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Personal &amp; Resume Template
                  </span>{" "}
                  <span className="text-red-600">(index-portfolio.html)</span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-sky-500 font-semibold me-2">Removed : </b>{" "}
                  Remove{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    _timeline.scss file and fixed and update timeline code in
                    Personal &amp; Resume Template
                  </span>{" "}
                  <span className="text-red-600">(index-portfolio.html)</span>{" "}
                </li>
              </ul>
              {/* 1.4.0 End */}
              {/* 1.3.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.3.0</span> - 20th
                July 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Tailwind CSS v3.1.6
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    NFT Marketplace
                  </span>{" "}
                  (index-nft.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    NFT Market
                  </span>{" "}
                  inner page like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Explore, Collections, Wallet, Creators, Create NFT Item, NFT
                    Detail, &amp; Auction
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    SEO Agency
                  </span>{" "}
                  (index-seo.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Online Course
                  </span>{" "}
                  (index-course.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Course
                  </span>{" "}
                  inner page like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Courses Listing &amp; Course detail
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Event &amp; Conference
                  </span>{" "}
                  (index-event.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Food Blog
                  </span>{" "}
                  (index-food-blog.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Food Blog
                  </span>{" "}
                  inner page like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Blog detail / Food Recipe
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Gulp File
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    package.json
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-sky-500 font-semibold me-2">Removed : </b>{" "}
                  Remove{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    postcss.config.js
                  </span>
                </li>
              </ul>
              {/* 1.3.0 End */}
              {/* 1.2.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.2.0</span> - 24th
                June 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Latest{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Tailwind CSS v3.1.4
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Wow Animation Plugin
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Animate Animation Plugin
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update Saas (index-saas.html) Demo in{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Animation
                  </span>{" "}
                  Mode
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Real Estate
                  </span>{" "}
                  (index-real-estate.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Real Estate
                  </span>{" "}
                  inner page like{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Listing page
                  </span>{" "}
                  and{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Property Detail Page
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Co-working Space
                  </span>{" "}
                  (index-coworking.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Service Provider
                  </span>{" "}
                  (index-service.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Add new{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    User Profile Pages
                  </span>{" "}
                  (user-profile.html) demo
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    Gulp File
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Update CSS to{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    SASS(SCSS)
                  </span>
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fix some{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    CSS
                  </span>{" "}
                  issues like, buttons, breadcrumb, and some in HTML pages
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-sky-500 font-semibold me-2">Removed : </b>{" "}
                  Remove some{" "}
                  <span className="text-black dark:text-white font-semibold mx-1">
                    External CSS
                  </span>{" "}
                  like bg video animation, Kenburn Effect, and etc.
                </li>
              </ul>
              {/* 1.2.0 End */}
              {/* v1.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.1.0</span> - 1st
                June 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-emerald-600 font-semibold me-2">
                    Added :{" "}
                  </b>{" "}
                  Added Dark Version
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed Back to top buttons and Js
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-amber-500 font-semibold me-2">
                    Updated :{" "}
                  </b>{" "}
                  Remove some external css
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed some menu issues
                </li>
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  <b className="text-red-600 font-semibold me-2">Fixed : </b>{" "}
                  Fixed responsive issue in App Landing page
                </li>
              </ul>
              {/* v1.0 End */}
              {/* v1.0 Start */}
              <h5 className="text-xl font-bold">
                Version <span className="text-emerald-600">1.0.0</span> - 17th
                May 2022
              </h5>
              <ul className="list-none mb-10">
                <li className="items-center text-slate-400 my-3 ms-2">
                  <i
                    data-feather="arrow-right-circle"
                    className="size-4 me-2 text-indigo-600 inline"
                  />
                  Initial Released
                </li>
              </ul>
              {/* v1.0 End */}
              <div>
                <a
                  href="https://1.envato.market/techwind"
                  target="_blank"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                >
                  Download Now
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*grid*/}
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
    {/* LTR & RTL Mode Code */}
    {/* JAVASCRIPTS */}
    {/* JAVASCRIPTS */}
    {/* Mirrored from shreethemes.in/techwind/landing/changelog.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 May 2024 14:58:44 GMT */}
  </>
);
