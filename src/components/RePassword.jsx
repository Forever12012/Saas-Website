import { Link } from "react-router-dom";
export const RePassword = () => (
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

    <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.html')] bg-no-repeat bg-center bg-cover">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      <div className="container relative">
        <div className="flex justify-center">
          <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
            <a href="index.html">
              <img
                src="assets/images/logo-icon-64.png"
                className="mx-auto"
                alt=""
              />
            </a>
            <h5 className="my-6 text-xl font-semibold">Reset Your Password</h5>
            <div className="grid grid-cols-1">
              <p className="text-slate-400 mb-6">
                Please enter your email address. You will receive a link to
                create a new password via email.
              </p>
              <form className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <label className="font-semibold" htmlFor="LoginEmail">
                      Email Address:
                    </label>
                    <input
                      id="LoginEmail"
                      type="email"
                      className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      defaultValue="Send"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Remember your password ?{" "}
                    </span>
                    <Link
                      to="/login"
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign In
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*end section */}
    <div className="fixed bottom-3 end-3">
      <a
        href="#"
        className="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"
      >
        <i data-feather="arrow-left" className="size-4" />
      </a>
    </div>
    {/* Switcher */}
    <div className="fixed top-[30%] -right-2 z-50">
      <span className="relative inline-block rotate-90">
        <input
          type="checkbox"
          className="checkbox opacity-0 absolute"
          id="chk"
        />
        <label
          className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          htmlFor="chk"
        >
          <i className="uil uil-moon text-[20px] text-yellow-500" />
          <i className="uil uil-sun text-[20px] text-yellow-500" />
          <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7" />
        </label>
      </span>
    </div>
    {/* Switcher */}
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
