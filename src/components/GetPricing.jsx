// This will open when there is no active plans in the dashboard

import { Link } from "react-router-dom";

export const GetPricing = () => (
  <section className="relative md:py-24 py-16">
    <div className="container relative">
      <div className="grid grid-cols-1 pb-8 text-center">
        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Choose Pricing Plan
        </h3>
        <p className="text-slate-400 max-w-xl mx-auto">
          Start working with Techwind that can provide everything you need to
          generate awareness, drive traffic, connect.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-[30px]">
        <div className="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
          <div className="p-6 py-8">
            <h6 className="font-bold uppercase mb-5 text-indigo-600">
              Starter
            </h6>
            <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">70</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
            </div>
            <ul className="list-none text-slate-400">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                5000 messages per month
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Source Files
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Free Appointments
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Enhanced Security
              </li>
            </ul>
            <Link
              to={`/checkout/starter`}
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
          <div className="p-6 py-8 md:ps-10">
            <h6 className="font-bold uppercase mb-5 text-indigo-600">
              Business
            </h6>
            <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">120</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
            </div>
            <ul className="list-none text-slate-400">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                10000 messages per month
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Source Files
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Free Appointments
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Enhanced Security
              </li>
            </ul>
            <Link
              to={`/checkout/business`}
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
          <div className="p-6 py-8 md:ps-10">
            <h6 className="font-bold uppercase mb-5 text-indigo-600">
              Professional
            </h6>
            <div className="flex mb-5">
              <span className="text-xl font-semibold">$</span>
              <span className="price text-4xl font-semibold mb-0">300</span>
              <span className="text-xl font-semibold self-end mb-1">/mo</span>
            </div>
            <ul className="list-none text-slate-400">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                30000 messages per month
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Source Files
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Free Appointments
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Enhanced Security
              </li>
            </ul>
            <Link
              to={`/checkout/professional`}
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 duration-500 hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
          <div className="p-6 py-8 md:ps-10">
            <h6 className="font-bold uppercase mb-5 text-indigo-600">
              Enterprise
            </h6>

            <ul className="list-none text-slate-400">
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                30000+ messages per month
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Source Files
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Free Appointments
              </li>
              <li className="mb-1 flex">
                <i className="uil uil-check-circle text-indigo-600 text-xl me-2" />
                Enhanced Security
              </li>
            </ul>
            <a
              href="#"
              className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
