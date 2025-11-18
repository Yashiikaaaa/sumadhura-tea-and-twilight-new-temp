"use client"

import { useRef, useState, useEffect } from "react"
import EnquiryModal from "@/components/EnquiryModal"

export default function PricingPlots() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)
  const plots = [
    { price: "₹1.66 Cr+", size: "2 BHK (1360 Sq. Ft)" },
{ price: "₹2 Cr+", size: "3 BHK (1920Sq. Ft)" },
{ price: "₹2.5 Cr+", size: "3 BHK (2295 Sq. Ft)" },

];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

      // Calculate active index based on scroll position
      const cardWidth = 280 + 24 // card width + gap
      const currentIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(currentIndex)
    }
  }

  useEffect(() => {
    checkScroll()
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScroll)
      window.addEventListener("resize", checkScroll)
      return () => {
        scrollContainer.removeEventListener("scroll", checkScroll)
        window.removeEventListener("resize", checkScroll)
      }
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <>
    <section id="configuration" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-9">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-4 text-[#221628] font-['Urbanist']">
            Choose Your Apartment
          </h2>
          <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl">
            Select from our range of thoughtfully designed 1 ,2, 3 & 4 BHK residences, each crafted to elevate your urban living experience.
          </p>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth p-1 items-center scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {plots.map((plot, index) => (
              <div
                key={index}
                className="shrink-0 w-[280px] md:w-[320px] bg-white  rounded-[4px] p-4 shadow-[0px_0px_4px_0px_#00000040] snap-center"
              >
                <div className="mb-[30px] justify-center items-center text-center font-['Urbanist']">
                  <h3 className="text-2xl md:text-4xl font-bold text-[#221628] mb-1">
                    {plot.price}
                  </h3>
                  <p className="text-[#575556] text-base font-medium">
                    Size : {plot.size}
                  </p>
                </div>

                <button className="w-full bg-primary text-white py-3 px-4 rounded-[4px] font-semibold text-lg font-['Urbanist'] cursor-pointer"
                  onClick={() => {setIsModalOpen(true)
                    setClickedIndex(index)
                  }}
                >
                  Get Pricing
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {plots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (scrollRef.current) {
                      const cardWidth = 304 // 280px card + 24px gap
                      scrollRef.current.scrollTo({
                        left: cardWidth * index,
                        behavior: "smooth",
                      })
                    }
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-8 bg-primary" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to plot ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center md:justify-end gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft
                    ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer"
                    : "border-[#BAA2AD] text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Scroll left"
              >
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.4762 9.14289L3.80957 9.14289M3.80957 9.14289L6.09528 11.4286M3.80957 9.14289L6.09528 6.85718"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  canScrollRight
                    ? "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white cursor-pointer"
                    : "border-[#BAA2AD] text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Scroll right"
              >
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.80953 9.14289L14.4762 9.14289M14.4762 9.14289L12.1905 11.4286M14.4762 9.14289L12.1905 6.85718"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EnquiryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Get Pricing"
      subtitle="Enter your details to receive the pricing information for your selected plot."
      openedEventTitle={clickedIndex !== null ? `Contact_form_opened_pricing_plot_${clickedIndex + 1}` : "Contact_form_opened_pricing_plot"}
      submitEventTitle={clickedIndex !== null ? `Contact_form_submit_pricing_plot_${clickedIndex + 1}` : "Contact_form_submit_pricing_plot"}
    />
    </>
  )
}