"use client";
import EnquiryModal from "@/components/EnquiryModal";
import { useState } from "react";

export default function MasterPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <section id="master-plan" className="py-12 md:py-20 bg-[#F9F4ED]">
        <div className=" mx-auto pl-4 md:pl-0 max-w-7xl">
          {/* Header with Download Button */}
          <div className="flex flex-col md:flex-row md:items-start  pr-4 md:pr-0 md:justify-between mb-8 md:mb-12 gap-4">
            <div className="flex-1">
              <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']">
                Master Plan
              </h2>
              <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-2xl">
                Explore the thoughtful layout, strategic tower placement, and vast open spaces designed for a refined living experience.


              </p>
            </div>
            <button
              className="bg-primary  hidden md:flex text-white px-6 md:px-8 py-3 rounded-[4px] font-semibold font-['Urbanist'] text-sm md:text-base transition-colors duration-300 shadow-md items-center gap-2 whitespace-nowrap cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <img src={"/download.svg"} className="w-5 h-5" />
              Download Brochure
            </button>
          </div>

          {/* Scrollable Brochure Container */}
          <div className="relative w-full h-[151px] md:h-[534px] bg-[#3B372E] rounded-[4px] overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex items-center overflow-hidden">
              {/* Scrollable Row */}
              <div
                className="flex overflow-x-scroll px-2 md:px-6 py-4 md:py-6 gap-3 md:gap-6 snap-x snap-mandatory"
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {/* First Brochure Image */}
                <img
                  src="/assets/introduction/sumadhura2.png"
                  alt="Master Plan Brochure - Page 1"
                  className="snap-none flex-shrink-0 object-contain rounded-[4px] h-[130px] md:h-[480px] w-auto"
                />
                <img
                  src="/brochure2.png"
                  alt="Master Plan Brochure - Page 2"
                  className="snap-none flex-shrink-0 object-contain rounded-[4px] h-[130px] md:h-[480px] w-auto"
                />
              </div>
            </div>
          </div>
          <button
            className="bg-primary  md:hidden text-white mt-4.5 px-6 md:px-8 py-3 rounded-[4px] font-semibold font-['Urbanist'] text-sm md:text-base transition-colors duration-300 shadow-md flex flex-row items-center gap-2 whitespace-nowrap cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <img src={"/download.svg"} className="w-4.5 h-4.5 object-contain" />
            Download Brochure
          </button>
        </div>
      </section>
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Download Brochure"
        subtitle="Enter your name and number to get the brochure download instantly"
        openedEventTitle="Contact_form_opened_masterplan"
        submitEventTitle="Contact_form_submit_masterplan"
      />
    </>
  );
}
