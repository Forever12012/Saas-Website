import { Link } from "react-router-dom";
export const Footer = () => (
  <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
    <div className="container relative">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="py-[60px] px-0">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-4 md:col-span-12">
                <a href="#" className="text-[22px] focus:outline-none">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo-light.png`}
                    alt="Logo"
                  />
                </a>
                <p className="mt-6 text-gray-300">
                  Transform your business with our AI-powered chatbot solutions
                  designed to boost engagement, automate tasks, and deliver
                  exceptional user experiences.
                </p>

                <ul className="list-none mt-6">
                  <li className="inline">
                    <a
                      href="https://1.envato.market/techwind"
                      target="_blank"
                      className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i
                        className="uil uil-shopping-cart align-middle"
                        title="Buy Now"
                      />
                    </a>
                  </li>
                  {/* <li className="inline">
                    <a
                      href="https://dribbble.com/shreethemes"
                      target="_blank"
                      className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i
                        className="uil uil-dribbble align-middle"
                        title="dribbble"
                      />
                    </a>
                  </li> */}
                 
                  <li className="inline">
                    <a
                      href="http://linkedin.com/company/shreethemes"
                      target="_blank"
                      className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i className="uil uil-linkedin" title="Linkedin" />
                    </a>
                  </li>
                 
                  {/* <li className="inline">
                    <a
                      href="https://www.instagram.com/shreethemes/"
                      target="_blank"
                      className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i
                        className="uil uil-instagram align-middle"
                        title="instagram"
                      />
                    </a>
                  </li> */}
                  <li className="inline">
                    <a
                      href="https://twitter.com/shreethemes"
                      target="_blank"
                      className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                    >
                      <i
                        className="uil uil-twitter align-middle"
                        title="twitter"
                      />
                    </a>
                  </li>
                 
                 
                </ul>
                {/*end icon*/}
              </div>
              {/*end col*/}
              <div className="lg:col-span-2 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Company
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <Link
                      to="/aboutus"
                      href="page-aboutus.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> About us
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/services"
                      href="page-services.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Services
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/pricing"
                      href="page-pricing.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Pricing
                    </Link>
                  </li>
                  {/* <li className="mt-[10px]">
                    <Link
                      to="/projects"
                      href="portfolio-creative-four.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Project
                    </Link>
                  </li> */}
                  <li className="mt-[10px]">
                    <Link
                      to="/blog"
                      href="blog.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Blog
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/login"
                      href="blog.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Login
                    </Link>
                  </li>
                </ul>
              </div>
              {/*end col*/}
              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Usefull Links
                </h5>
                <ul className="list-none footer-list mt-6">
                  <li>
                    <Link
                      to="/terms"
                      href="page-terms.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Terms of Services
                    </Link>
                  </li>
                  <li className="mt-[10px]">
                    <Link
                      to="/privacy"
                      href="page-privacy.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Privacy Policy
                    </Link>
                  </li>
                  {/* <li className="mt-[10px]">
                    <Link
                      to="/docs"
                      href="documentation.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Documentation
                    </Link>
                  </li> */}
                  {/* <li className="mt-[10px]">
                    <Link
                      to="/changelog"
                      href="changelog.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Changelog
                    </Link>
                  </li> */}
                  {/* <li className="mt-[10px]">
                    <a
                      href="widget.html"
                      className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                    >
                      <i className="uil uil-angle-right-b" /> Widget
                    </a>
                  </li> */}
                </ul>
              </div>
              {/*end col*/}
              <div className="lg:col-span-3 md:col-span-4">
                <h5 className="tracking-[1px] text-gray-100 font-semibold">
                  Newsletter
                </h5>
                <p className="mt-6">
                  Sign up and receive the latest tips via email.
                </p>
                <form>
                  <div className="grid grid-cols-1">
                    <div className="my-3">
                      <label className="form-label">
                        Write your email
                        <span className="text-red-600">*</span>
                      </label>
                      <div className="form-icon relative mt-2">
                        <i
                          data-feather="mail"
                          className="size-4 absolute top-3 start-4"
                        />
                        <input
                          type="email"
                          className="form-input ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200"
                          placeholder="Email"
                          name="email"
                          required=""
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submitsubscribe"
                      name="send"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
              {/*end col*/}
            </div>
            {/*end grid*/}
          </div>
          {/*end col*/}
        </div>
      </div>
      {/*end grid*/}
    </div>
    {/*end container*/}
    <div className="py-[30px] px-0 border-t border-slate-800">
      <div className="container relative text-center">
        <div className="grid md:grid-cols-2 items-center">
          <div className="md:text-start text-center">
            <p className="mb-0">
              IntelliNexBot. Design with &nbsp;
              <i className="mdi mdi-heart text-red-600" /> by
              <a
                href="https://shreethemes.in/"
                target="_blank"
                className="text-reset"
              >
               &nbsp; Nexient Ai
              </a>
            </p>
          </div>
          <ul className="list-none md:text-end text-center mt-6 md:mt-0">
            <li className="inline">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/payments/american-ex.png`}
                  className="max-h-6 inline"
                  title="American Express"
                  alt=""
                />
              </a>
            </li>
            <li className="inline">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/payments/discover.png`}
                  className="max-h-6 inline"
                  title="Discover"
                  alt=""
                />
              </a>
            </li>
            <li className="inline">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/payments/master-card.png`}
                  className="max-h-6 inline"
                  title="Master Card"
                  alt=""
                />
              </a>
            </li>
            <li className="inline">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/payments/paypal.png`}
                  className="max-h-6 inline"
                  title="Paypal"
                  alt=""
                />
              </a>
            </li>
            <li className="inline">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/payments/visa.png`}
                  className="max-h-6 inline"
                  title="Visa"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
        {/*end grid*/}
      </div>
      {/*end container*/}
    </div>
  </footer>
);
