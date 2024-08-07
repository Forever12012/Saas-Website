import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Blog = () => (
  <>
    <section class="relative table w-full py-32 lg:py-36 bg-[url('../../assets/images/blog/bg.html')] bg-center bg-no-repeat bg-cover">
      <div class="absolute inset-0 bg-black opacity-80"></div>
      <div class="container relative">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="mb-3 text-3xl leading-normal font-medium text-white">
            IntelliXbot Blog: Exploring the Future <br /> of Business
            Communication and More
          </h3>
        </div>
      </div>

      <div class="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
        <ul class="tracking-[0.5px] mb-0 inline-block">
          <li class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
            <a href="index.html">intelliXBot</a>
          </li>
          <li class="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
            <i class="uil uil-angle-right-b"></i>
          </li>
          <li
            class="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
            aria-current="page"
          >
            Blogs
          </li>
        </ul>
      </div>
    </section>

    {/* Start Section*/}
    <section className="relative md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/01.jpeg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog1"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Transforming Customer Service: How IntelliXbot Enhances Customer
                Engagement and Satisfaction
              </Link>
              <p className="text-slate-400 mt-3">
                In today’s fast-paced digital landscape, customer expectations
                are higher than ever. Businesses need to provide instant,
                efficient, and personalized responses
              </p>
              <div className="mt-4">
                <Link
                  to="/blog1"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/02.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog2"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Boosting Sales with IntelliXbot: AI-Driven Lead Generation and
                Conversion
              </Link>
              <p className="text-slate-400 mt-3">
                In the competitive landscape of modern business, generating and
                converting leads is crucial for growth and success. IntelliXbot,
                with its advanced AI capabilities
              </p>
              <div className="mt-4">
                <Link
                  to="/blog2"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/03.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog3"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Streamlining Operations: The Efficiency Gains of Using
                IntelliXbot for Internal Processes
              </Link>
              <p className="text-slate-400 mt-3">
                Businesses are continually seeking ways to streamline internal
                processes, reduce costs, and improve productivity
              </p>
              <div className="mt-4">
                <Link
                  to="/blog3"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/04.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog4"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Competitive Pricing and ROI: Why IntelliXbot is a Smart
                Investment for Businesses
              </Link>
              <p className="text-slate-400 mt-3">
                At IntelliXbot, we believe that cutting-edge AI technology
                should be accessible to businesses of all sizes. Our competitive
                pricing model is designed to provide maximum value without
                burdening your budget.
              </p>
              <div className="mt-4">
                <Link
                  to="/blog4"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/05.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog5"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Multi-Channel Integration: Reaching Customers Wherever They Are
                with IntelliXbot
              </Link>
              <p className="text-slate-400 mt-3">
                In today's digital age, customers interact with businesses
                through a myriad of channels. From social media and messaging
                apps to websites and email, the need
              </p>
              <div className="mt-4">
                <Link
                  to="/blog5"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/06.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog6"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Customized Solutions: Tailoring IntelliXbot to Fit Your Business
                Needs
              </Link>
              <p className="text-slate-400 mt-3">
                IntelliXbot, with its customized bot development services,
                offers a flexible and adaptable approach, ensuring that your AI
                chatbot aligns perfectly with your business goals and
                operational demands
              </p>
              <div className="mt-4">
                <Link
                  to="/blog6"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/07.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog7"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Enhancing Marketing Campaigns: How IntelliXbot Personalizes
                Customer Interactions
              </Link>
              <p className="text-slate-400 mt-3">
                IntelliXbot, with its advanced AI and machine learning
                capabilities, offers a powerful solution for enhancing your
                marketing efforts. IntelliXbot helps businesses create more
                effective and targeted marketing campaigns.
              </p>
              <div className="mt-4">
                <Link
                  to="/blog7"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
          <div className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
            <img src="assets/images/blog/08.jpg" alt="" />
            <div className="content p-6">
              <Link
                to="/blog8"
                className="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                The Future of Customer Engagement: Why IntelliXbot is Here to
                Stay
              </Link>
              <p className="text-slate-400 mt-3">
                In the fast-evolving landscape of business communication,
                staying ahead means embracing innovative technologies that
                enhance efficiency, engagement, and customer satisfaction.
                IntelliXbot stands at the forefront of this revolution
              </p>
              <div className="mt-4">
                <Link
                  to="/blog8"
                  className="relative inline-block tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
                >
                  Read More <i className="uil uil-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          {/* blog end */}
        </div>
      </div>
    </section>
    {/* End Section*/}

    <Footer />
  </>
);
