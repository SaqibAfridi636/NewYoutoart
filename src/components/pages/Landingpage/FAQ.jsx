import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqItems = [
    {
      question: "What is youtocart.com about?",
      answer:
        "Youtocart.com is an online networking platform that allows people of various artistic interests to communicate, collaborate and come up with their own artworks.",
    },
    {
      question: "How does youtocart.com work?",
      answer:
        "Youtocart.com works by connecting artists and creators through a user-friendly platform where they can share ideas, collaborate on projects, and showcase their work to a community of like-minded individuals.",
    },
    {
      question:
        "How does youtocart.com help a certain user with a particular interest in some art category?",
      answer:
        "The platform allows users to filter by specific art categories, join specialized groups, and connect with others who share their particular artistic interests, making it easier to find relevant collaborations and resources.",
    },
    {
      question:
        "How does youtocart.com help people who are trying to perceive a full time career in arts?",
      answer:
        "Youtocart.com provides resources, networking opportunities, and exposure to help artists build their portfolios, connect with potential clients or employers, and transition into full-time careers in the arts.",
    },
    {
      question: "How do I collaborate with others at Youtocart?",
      answer:
        "You can collaborate by joining projects, starting your own project and inviting others, or using our matchmaking system to find compatible creators based on skills, interests, and project goals.",
    },
    {
      question: "Anything else from Youtocart.com?",
      answer:
        "Yes, we regularly host virtual events, workshops, and competitions to help our community grow, learn new skills, and gain recognition for their work.",
    },
  ];

  return (
    <section className="bg-[#f3f5f5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          FAQ
        </h1>

        {/* FAQ Items */}
        <div className="bg-[#f3f5f5] rounded-xl overflow-hidden">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`border-b border-gray-200 last:border-b-0 transition-all duration-300 ${
                activeIndex === index ? "bg-blue-50" : ""
              }`}
            >
              <button
                className="w-full px-4 sm:px-6 py-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-blue-600 mr-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {item.question}
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    {activeIndex === index ? (
                      <svg
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </button>

              <div
                className={`px-4 sm:px-6 pb-5 pt-2 transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 max-h-96"
                    : "opacity-0 max-h-0 overflow-hidden"
                }`}
              >
                <div className="ml-10">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
