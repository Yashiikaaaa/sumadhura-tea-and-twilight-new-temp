"use client"

import { useState } from "react"

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is the possession date of the project?",
      answer:
        "The possession of the project is expected by Dec 2029.",
    },
    {
      question: "What is the location of the project?",
      answer:
        "The project, Tea & Twilight by Sumadhura, is located in the vibrant Whitefield micro-market, specifically in the Siddapura area of East Bangalore. It offers excellent connectivity to the region's massive IT and social infrastructure.",
    },
    {
      question: "When does the pre booking start for the project?",
      answer:
        "Pre-bookings for the project are scheduled to begin from the month of November,2025. Interested buyers can register their interest in advance to secure priority access",
    },
    {
      question: "What amenities and features will be available in the project?",
      answer:
        "The project will offer modern amenities such as a clubhouse, swimming pool, landscaped gardens, children’s play area, gymnasium, and 24/7 security, ensuring a comfortable and luxurious lifestyle for residents.",
    },
  ]

  return (
    <section id="faqs" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Side - Title and Description */}
          <div className="md:pr-8">
            <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-4 md:mb-6 text-[#221628] font-['Urbanist'] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[#575556] text-[14px] md:text-base font-medium font-['Urbanist']">
              Find quick answers to common question about the project.
            </p>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E8E7E8] rounded-xl overflow-hidden shadow-[0px_0px_4px_0px_#00000040]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-3 md:p-4 flex justify-between items-center gap-4 text-left transition-colors duration-200"
                >
                  <span className="font-semibold text-[#0A0B0A] font-['Urbanist'] text-base md:text-xl pr-2">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center">
                    {openIndex === index ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#221628]"
                      >
                        <path
                          d="M18 12H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#221628]"
                      >
                        <path
                          d="M12 6V18M18 12H6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-4 md:pb-5 pt-2">
                    <p className="text-[#575556] text-sm md:text-lg leading-normal font-medium font-['Urbanist']">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}