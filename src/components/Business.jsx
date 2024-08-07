export const Business = () => (
  <>
    <section className="relative md:py-24 py-16">
      <div className="container relative md:mt-1 mt-1">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Who We Are ?
          </h6>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Innovative AI Solutions for <br />
            Enhanced Customer Engagement
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            We are a dynamic team dedicated to transforming customer interaction
            through our advanced AI chatbot technology. Our solutions are
            designed to generate awareness, drive traffic, and foster meaningful
            connections, ensuring your business stays ahead in the digital
            landscape.
          </p>
        </div>

        {/* who we are start */}
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
              <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-web-grid"></i>
              </div>
              <div className="content mt-7">
                <a
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  Multi-Channel Integration
                </a>
                <p className="text-slate-400 mt-3">
                  Connect with customers on their preferred platforms, including
                  websites, social media, and messaging apps.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
              <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-chart"></i>
              </div>
              <div className="content mt-7">
                <a
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  Advanced Analytics
                </a>
                <p className="text-slate-400 mt-3">
                  Gain insights into customer interactions and behaviors with
                  detailed analytics and reporting tools.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>

            <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
              <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-pen"></i>
              </div>
              <div className="content mt-7">
                <a
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  Customizable Responses
                </a>
                <p className="text-slate-400 mt-3">
                  Tailor chatbot responses to match your brand voice and meet
                  specific business needs.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
              <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-chat-info"></i>
              </div>
              <div className="content mt-7">
                <a
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  24/7 Customer Support
                </a>
                <p className="text-slate-400 mt-3">
                  Ensure your customers receive instant support any time of day
                  with our always-on AI chatbots.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>

            <div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
              <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-lock-alt"></i>
              </div>
              <div className="content mt-7">
                <a
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  Secure Conversations
                </a>
                <p className="text-slate-400 mt-3">
                  Maintain customer trust with secure, encrypted interactions
                  through our AI chatbot platform.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>

            <div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 duration-500 rounded-2xl mt-6 text-center">
              <div className="size-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <i className="uil uil-robot"></i>
              </div>
              <div className="content mt-7">
                <a
                  href="/"
                  className="title h5 text-lg font-medium hover:text-indigo-600"
                >
                  Automated Workflow
                </a>
                <p className="text-slate-400 mt-3">
                  Streamline your business processes with AI-driven automation
                  that handles routine tasks efficiently.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>
          </div>

        {/* who we are ends */}
        {/*end grid*/}
      </div>
      {/*end container*/}
    </section>

{/* How it works starts */}
    <section className="relative md:py-24 py-16 overflow-hidden">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
            How It Works?
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Discover the seamless process of getting your customized chatbot
            developed.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-airplay"></i>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Visit Our Page
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                Explore our website to learn about our offerings and pricing
                packages.
              </p>
            </div>
          </div>

          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit md:mt-16">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-shopping-cart"></i>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Choose a Package
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                Select a pricing package that best suits your business needs.
              </p>
            </div>
          </div>

          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-file-info-alt"></i>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Provide Details
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                Share your company details and basic requirements for your
                chatbot.
              </p>
            </div>
          </div>

          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit md:mt-16">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-calendar-alt"></i>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Schedule a Meeting
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                Arrange a meeting through our platform to discuss detailed
                requirements.
              </p>
            </div>
          </div>

          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-clock"></i>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Discuss and Set Deadlines
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                In the meeting, we finalize requirements and set a development
                timeline.
              </p>
            </div>
          </div>

          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-constructor"></i>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Development Phase
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                Our team begins developing your chatbot based on the detailed
                requirements gathered.
              </p>
            </div>
          </div>

          <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 duration-500 rounded-xl overflow-hidden text-center h-fit">
            <div className="relative overflow-hidden text-transparent -m-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-hexagon size-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
              <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl duration-500 text-3xl flex align-middle justify-center items-center">
                <i className="uil uil-rocket"></i>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="#"
                className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
              >
                Deployment and Support
              </a>
              <p className="text-slate-400 duration-500 mt-3">
                We deploy your chatbot and provide ongoing support to ensure
                seamless performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* How it works ends */}
  </>
);
