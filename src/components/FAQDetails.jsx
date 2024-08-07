import React, { useState } from "react";

export const FAQDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative md:py-24 py-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
          Frequently Asked Questions
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">
        Discover everything you need to know about IntelliXBot. 
        Get insights, understand its features, and learn how it can revolutionize
         your business operations.
        </p>
      </div>

      <div className="font-nunito text-base text-black dark:text-white dark:bg-slate-900">
        <div className="md:flex justify-center">
          <div className="lg:w-2/3 md:w-full">
            <div
              id="accordion-collapse"
              data-accordion="collapse"
              className="mt-6"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                <div
                  key={index}
                  className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                >
                  <h2
                    className={`text-base font-semibold bg-white dark:bg-slate-900 ${
                      activeIndex === index
                        ? "border-b border-gray-300 dark:border-gray-700"
                        : ""
                    }`}
                    id={`accordion-collapse-heading-${index}`}
                  >
                    <button
                      type="button"
                      className="flex justify-between items-center p-5 w-full font-medium text-start"
                      onClick={() => handleAccordionClick(index)}
                      aria-expanded={activeIndex === index}
                      aria-controls={`accordion-collapse-body-${index}`}
                    >
                      <span>
                        {index === 1 && "What is IntelliXBot?"}
                        {index === 2 &&
                          "How can IntelliXBot benefit my business?"}
                        {index === 3 &&
                          "Which platforms can IntelliXBot integrate with?"}
                        {index === 4 &&
                          "How secure are conversations with IntelliXBot?"}
                        {index === 5 &&
                          "Can I customize responses with IntelliXBot?"}
                        {index === 6 &&
                          "What kind of analytics does IntelliXBot provide?"}
                        {index === 7 &&
                          "How reliable is 24/7 customer support with IntelliXBot?"}
                        {index === 8 &&
                          "How does the IntelliXBot deployment process work?"}
                      </span>
                      <svg
                        data-accordion-icon
                        className={`size-4 ${
                          activeIndex === index ? "rotate-180" : ""
                        } shrink-0`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h2>
                  <div
                    id={`accordion-collapse-body-${index}`}
                    className={`transition-all duration-500 ${
                      activeIndex === index ? "block" : "hidden"
                    } bg-white dark:bg-slate-900`}
                    aria-labelledby={`accordion-collapse-heading-${index}`}
                  >
                    <div className="p-5">
                      <p className="text-slate-400 dark:text-gray-400">
                        {index === 1 &&
                          "IntelliXBot is an AI-powered chatbot solution designed to enhance customer engagement, automate tasks, and provide personalized user experiences."}
                        {index === 2 &&
                          "IntelliXBot can benefit your business by improving customer interaction efficiency, boosting conversions, and reducing operational costs."}
                        {index === 3 &&
                          "IntelliXBot can integrate with various platforms including websites, social media channels, and messaging apps to reach customers wherever they are."}
                        {index === 4 &&
                          "Conversations with IntelliXBot are secure as they use encrypted communication channels to protect user data and maintain privacy."}
                        {index === 5 &&
                          "Yes, you can customize responses with IntelliXBot to align with your brand voice and meet specific business requirements."}
                        {index === 6 &&
                          "IntelliXBot provides detailed analytics on customer interactions and behaviors, helping you gain insights to optimize business strategies."}
                        {index === 7 &&
                          "IntelliXBot offers reliable 24/7 customer support through automated responses and seamless escalation to human agents when necessary."}
                        {index === 8 &&
                          "The deployment process of IntelliXBot involves selecting a package, sharing requirements, development, deployment, and ongoing support to ensure optimal performance."}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
