import { Footer } from "./Footer";

export const Docs = () => (
  <>
    <meta charSet="UTF-8" />
    <title>
      Techwind - Tailwind CSS Multipurpose Landing &amp; Admin Dashboard
      Template
    </title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta
      name="description"
      content="Tailwind CSS Multipurpose Landing & Admin Dashboard Template"
    />
    <meta
      name="keywords"
      content="agency, application, business, clean, creative, cryptocurrency, it solutions, modern, multipurpose, nft marketplace, portfolio, saas, software, tailwind css"
    />
    <meta name="author" content="Shreethemes" />
    <meta name="website" content="https://shreethemes.in/" />
    <meta name="email" content="support@shreethemes.in" />
    <meta name="version" content="2.2.0" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    {/* favicon */}
    <link rel="shortcut icon" href="assets/images/favicon.ico" />
    {/* Css */}
    {/* Main Css */}
    <link
      href="assets/libs/%40iconscout/unicons/css/line.css"
      type="text/css"
      rel="stylesheet"
    />
    <link
      href="assets/libs/%40mdi/font/css/materialdesignicons.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link rel="stylesheet" href="assets/css/tailwind.min.css" />

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
          <h3 className="text-3xl leading-normal font-semibold">
            Documentation
          </h3>
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
          <li
            className="inline-block uppercase text-[13px] font-bold text-indigo-600"
            aria-current="page"
          >
            Documentation
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
        <div className="grid grid-cols-1 items-center gap-[30px]">
          <div>
            <h4 className="text-3xl font-semibold mb-4">Introduction</h4>
            <p className="text-slate-400 text-base leading-8">
              Get start with{" "}
              <span className="text-indigo-600 font-semibold">Techwind.</span>{" "}
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered{" "}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="font-semibold text-indigo-600"
              >
                Tailwind CSS
              </a>{" "}
              html page.
            </p>
            <p className="text-slate-400 text-base leading-8 mt-2">
              Techwind is a Powerful Tailwind CSS Multipurpose Landing &amp;
              Admin Dashboard Template. It is an excellent HTML template for
              startup, cloud hosting, business, corporate, minimal portfolio
              single product (Smartwatch) , Saas, Social media marketing,
              Digital marketing/agency, Email Templates, Marketing, Agency,
              Careers and Jobs, Helpcenter, and much more.
            </p>
          </div>
          <div>
            <h4 className="text-3xl font-semibold mb-4">Setup HTML</h4>
            <h4 className="text-xl font-semibold mb-4">Introduction</h4>
            <p className="text-slate-400 text-base leading-8">
              We are using{" "}
              <a
                href="https://gulpjs.com/"
                className="text-indigo-600 font-semibold"
                target="_blank"
              >
                gulp
              </a>{" "}
              which allows having complete automation for build flow. In case if
              you don't know Gulp then it's easy to use it. Gulp is a toolkit
              for automating painful or time-consuming tasks in the development
              workflow, so you can stop messing around while building any
              project. You can read it more about it{" "}
              <a
                href="https://gulpjs.com/"
                className="text-indigo-600 font-semibold"
                target="_blank"
              >
                here
              </a>
              . Please follow below steps to install and setup all
              prerequisites:
            </p>
            <h5 className="text-xl font-semibold mb-4 mt-6">Prerequisites</h5>
            <p className="text-slate-400 text-base leading-8">
              Please follow below steps to install and setup all prerequisites:
            </p>
            <ul className="list-none mt-3">
              <li className="flex mt-2">
                <i className="mdi mdi-arrow-right" />
                <div className="ms-2">
                  <h6 className="font-semibold">Yarn</h6>
                  <p className="text-slate-400 text-base leading-8">
                    Make sure to have the{" "}
                    <a
                      href="https://classic.yarnpkg.com/en/"
                      className="text-indigo-600 font-semibold"
                      target="_blank"
                    >
                      Yarn
                    </a>{" "}
                    installed &amp; running in your computer. If you already
                    have installed Yarn on your computer, you can skip this
                    step. We suggest you to use Yarn instead of NPM.
                  </p>
                </div>
              </li>
              <li className="flex mt-2">
                <i className="mdi mdi-arrow-right" />
                <div className="ms-2">
                  <h6 className="font-semibold">Nodejs</h6>
                  <p className="text-slate-400 text-base leading-8">
                    Make sure to have the{" "}
                    <a
                      href="https://nodejs.org/"
                      className="text-indigo-600 font-semibold"
                      target="_blank"
                    >
                      Node.js
                    </a>{" "}
                    installed &amp; running in your computer. If you already
                    have installed Node on your computer, you can skip this step
                    if your existing node version is greater than 16.
                  </p>
                </div>
              </li>
              <li className="flex mt-2">
                <i className="mdi mdi-arrow-right" />
                <div className="ms-2">
                  <h6 className="font-semibold">Gulp</h6>
                  <p className="text-slate-400 text-base leading-8">
                    Make sure to have the{" "}
                    <a
                      href="https://gulpjs.com/"
                      className="text-indigo-600 font-semibold"
                      target="_blank"
                    >
                      Gulp
                    </a>{" "}
                    installed &amp; running in your computer. If you already
                    have installed gulp on run command npm install -g gulp from
                    your terminal.
                  </p>
                </div>
              </li>
              <li className="flex mt-2">
                <i className="mdi mdi-arrow-right" />
                <div className="ms-2">
                  <h6 className="font-semibold">Git</h6>
                  <p className="text-slate-400 text-base leading-8">
                    Make sure to have the{" "}
                    <a
                      href="https://git-scm.com/"
                      className="text-indigo-600 font-semibold"
                      target="_blank"
                    >
                      Git
                    </a>{" "}
                    installed globally &amp; running on your computer. If you
                    already have installed git on your computer, you can skip
                    this step.
                  </p>
                </div>
              </li>
            </ul>
            <h5 className="text-xl font-semibold mb-4 mt-6">Installation</h5>
            <p className="text-slate-400 text-base leading-8">
              To setup the admin theme, follow below-mentioned steps:
            </p>
            <ul className="list-none mt-3">
              <li className="flex">
                <i className="mdi mdi-arrow-right" />
                <div className="ms-2">
                  <h6 className="text-lg font-semibold mb-3">
                    Install Prerequisites
                  </h6>
                  <p className="text-slate-400 text-base leading-8">
                    Make sure to have all above prerequisites installed &amp;
                    running on your computer
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-slate-400 text-base leading-8 mb-4 mt-6">
              After you finished with the above steps, you can run the following
              commands into the terminal / command prompt from the root
              directory of the project to run the project locally or build for
              production use:
            </p>
            <div className="table-responsive bg-white dark:bg-slate-900 rounded">
              <table className="w-full text-sm text-start">
                <thead>
                  <tr>
                    <th
                      style={{ width: "20%" }}
                      className="border border-gray-100 dark:border-gray-700 p-4"
                    >
                      <i className="ti-file" /> Command
                    </th>
                    <th className="border border-gray-100 dark:border-gray-700 p-4">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                      <code className="text-red-600">yarn install</code>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                      This would install all the required dependencies in the{" "}
                      <code className="text-indigo-600 font-semibold">
                        node_modules
                      </code>{" "}
                      folder.
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                      <code className="text-red-600">gulp</code>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                      Runs the project locally, starts the development server
                      and watches for any changes in your code, including your
                      HTML, javascript, sass, etc. The development server is
                      accessible at{" "}
                      <a
                        href="http://localhost:3000/"
                        className="text-indigo-600 font-semibold"
                        target="_blank"
                      >
                        http://localhost:3000
                      </a>
                      .
                    </td>
                  </tr>
                  <tr>
                    <td className="text-lg border border-gray-100 dark:border-gray-700 p-4">
                      <code className="text-red-600">gulp build</code>
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                      Generates a{" "}
                      <code className="text-indigo-600 font-semibold">
                        /dist
                      </code>{" "}
                      directory with all the production files.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="mt-5 mb-3 text-3xl font-semibold">CSS</h5>
            <p className="text-lg font-semibold mb-4 mt-6">
              <i className="uil uil-angle-right-b" />
              Files are explained below:{" "}
            </p>
            <div className="table-responsive bg-white dark:bg-slate-900 rounded">
              <table className="w-full text-sm text-start mt-2">
                <thead>
                  <tr>
                    <th
                      style={{ width: "20%" }}
                      className="border border-gray-100 dark:border-gray-700 p-4"
                    >
                      <i className="ti-file" /> File
                    </th>
                    <th className="border border-gray-100 dark:border-gray-700 p-4">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 font-semibold text-red-600">
                      CSS
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                      You use{" "}
                      <code className="font-semibold text-red-600">
                        icons.css
                      </code>{" "}
                      and{" "}
                      <code className="font-semibold text-red-600">
                        tailwind.css
                      </code>
                      .
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 font-semibold text-red-600">
                      Dark Version
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                      In order to have Dark mode enabled, only add <b>dark</b>{" "}
                      class in <b>HTML</b> tag like,{" "}
                      <code className="font-semibold text-red-600">
                        &lt;html class="dark" lang="en"&gt;
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 font-semibold text-red-600">
                      RTL Version
                    </td>
                    <td className="border border-gray-100 dark:border-gray-700 p-4 text-base text-slate-400">
                      In order to have RTL mode enabled, Please changes in the{" "}
                      <code className="font-semibold text-red-600">
                        src/partials/main.html
                      </code>{" "}
                      file update the html tag like{" "}
                      <code className="font-semibold text-red-600">
                        &lt;html class="dark scroll-smooth" lang="en"
                        dir="ltr"&gt;
                      </code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-3xl font-semibold mb-6">
              How to change the{" "}
              <strong className="text-indigo-600">color</strong> in Techwind?
            </h4>
            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                It's easy to change your color if your color is{" "}
                <code className="text-red-600">indigo-600</code> to another{" "}
                <code className="text-red-600">
                  (red-600, red-400, orange-700, etc. as your theme primary
                  color)
                </code>{" "}
                please check and read the below link to the customizing colors
                docs,{" "}
                <a
                  href="https://tailwindcss.com/docs/customizing-colors"
                  className="font-semibold text-red-600"
                  target="_blank"
                >
                  https://tailwindcss.com/docs/customizing-colors
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-3xl font-semibold mb-6">
              How to change the{" "}
              <strong className="text-indigo-600">fonts family</strong> in
              Techwind?
            </h4>
            <div className="p-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                Please first of all open the{" "}
                <code className="font-semibold text-red-600">
                  tailwind.config.js
                </code>{" "}
                and please create your google fonts name in the{" "}
                <code className="font-semibold text-red-600">
                  module.exports &gt; theme &gt; fontFamily
                </code>{" "}
                <br /> For example:{" "}
                <code className="font-semibold text-red-600">
                  'rubik': ['"Rubik", sans-serif'],
                </code>{" "}
                add your Google fonts like the above example.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h4 className="text-3xl font-semibold mb-6">
              Menu style for Landing Page Template
            </h4>
            <h6 className="text-lg font-semibold mb-4 mt-6">
              <i className="uil uil-angle-right-b" /> Right Side Navbar Menu{" "}
            </h6>
            <div className="p-6 mt-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                If you use right side navbar menu so please use{" "}
                <code className="font-semibold text-red-600">
                  src/partials/navbar/nav-right.html
                </code>{" "}
                <br />
                <br /> otherwise <br />
                <br /> If you directly use{" "}
                <code className="font-semibold text-red-600">dist</code> file so
                please just add one class{" "}
                <code className="font-semibold text-red-600">justify-end</code>{" "}
                along with{" "}
                <code className="font-semibold text-red-600">
                  navigation-menu
                </code>
              </p>
            </div>
            <h6 className="text-lg font-semibold mb-4 mt-6">
              <i className="uil uil-angle-right-b" /> Left Navbar Menu{" "}
            </h6>
            <div className="p-6 mt-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                If you use left side navbar menu so please use{" "}
                <code className="font-semibold text-red-600">
                  src/partials/navbar/nav-left.html
                </code>{" "}
                <br />
                <br /> otherwise <br />
                <br /> If you directly use{" "}
                <code className="font-semibold text-red-600">dist</code> file so
                please just add one class{" "}
                <code className="font-semibold text-red-600">
                  justify-start
                </code>{" "}
                along with{" "}
                <code className="font-semibold text-red-600">
                  navigation-menu
                </code>
              </p>
            </div>
            <h6 className="text-lg font-semibold mb-4 mt-6">
              <i className="uil uil-angle-right-b" /> Light Navbar Menu{" "}
            </h6>
            <div className="p-6 mt-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                If you use Light menu so please use{" "}
                <code className="font-semibold text-red-600">
                  src/partials/navbar/nav-center-light.html
                </code>{" "}
                <br />
                <br /> otherwise <br />
                <br /> If you directly use{" "}
                <code className="font-semibold text-red-600">dist</code> file so
                please just add one class{" "}
                <code className="font-semibold text-red-600">nav-light</code>{" "}
                along with{" "}
                <code className="font-semibold text-red-600">
                  navigation-menu
                </code>
              </p>
            </div>
            <h6 className="text-lg font-semibold mb-4 mt-6">
              <i className="uil uil-angle-right-b" /> Light with Left Navbar
              Menu{" "}
            </h6>
            <div className="p-6 mt-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                If you use Light with Left side navbar menu so please use{" "}
                <code className="font-semibold text-red-600">
                  src/partials/navbar/nav-left-light.html
                </code>{" "}
                <br />
                <br /> otherwise <br />
                <br /> If you directly use{" "}
                <code className="font-semibold text-red-600">dist</code> file so
                please just add two class{" "}
                <code className="font-semibold text-red-600">
                  justify-start nav-light
                </code>{" "}
                along with{" "}
                <code className="font-semibold text-red-600">
                  navigation-menu
                </code>
              </p>
            </div>
            <h6 className="text-lg font-semibold mb-4 mt-6">
              <i className="uil uil-angle-right-b" /> Light with Right Navbar
              Menu{" "}
            </h6>
            <div className="p-6 mt-6 rounded-md shadow dark:shadow-gray-800">
              <p className="text-slate-400 text-base leading-8">
                If you use Light with Right side navbar menu so please use{" "}
                <code className="font-semibold text-red-600">
                  src/partials/navbar/nav-right-light.html
                </code>{" "}
                <br />
                <br /> otherwise <br />
                <br /> If you directly use{" "}
                <code className="font-semibold text-red-600">dist</code> file so
                please just add two class{" "}
                <code className="font-semibold text-red-600">
                  justify-end nav-light
                </code>{" "}
                along with{" "}
                <code className="font-semibold text-red-600">
                  navigation-menu
                </code>
              </p>
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
    {/* Footer End */}
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
    {/* Mirrored from shreethemes.in/techwind/landing/documentation.html by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 16 May 2024 14:58:44 GMT */}
  </>
);
