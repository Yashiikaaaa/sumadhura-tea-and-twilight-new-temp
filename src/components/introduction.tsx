
'use client'
import EnquiryModal from "@/components/EnquiryModal"
import { useState } from "react";

export default function Introduction() {
  const [isModalOpen, setIsModalOpen] =  useState(false);
  const [title, setTitle] = useState("Download Brochure");

  const cameraIcon = (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke='#BC9043' xmlns="http://www.w3.org/2000/svg">
<path d="M3 6.375H4.3125M4.3125 6.375C4.6606 6.375 4.99444 6.51328 5.24058 6.75942C5.48672 7.00556 5.625 7.3394 5.625 7.6875C5.625 8.0356 5.48672 8.36944 5.24058 8.61558C4.99444 8.86172 4.6606 9 4.3125 9H2.25M4.3125 6.375C4.6606 6.375 4.99444 6.23672 5.24058 5.99058C5.48672 5.74444 5.625 5.4106 5.625 5.0625C5.625 4.7144 5.48672 4.38056 5.24058 4.13442C4.99444 3.88828 4.6606 3.75 4.3125 3.75H2.25M15.75 11.25C15.75 13.7355 12.7275 15.75 9 15.75C5.2725 15.75 2.25 13.7355 2.25 11.25M10.5 3.75H9.75C9.15326 3.75 8.58097 3.98705 8.15901 4.40901C7.73705 4.83097 7.5 5.40326 7.5 6V7.5M7.5 7.5C7.5 7.89782 7.65803 8.27936 7.93934 8.56066C8.22064 8.84196 8.60217 9 9 9H9.375C9.77282 9 10.1544 8.84196 10.4357 8.56066C10.717 8.27936 10.875 7.89782 10.875 7.5V7.125C10.875 6.72718 10.717 6.34564 10.4357 6.06434C10.1544 5.78304 9.77282 5.625 9.375 5.625H9C8.60217 5.625 8.22064 5.78304 7.93934 6.06434C7.65803 6.34564 7.5 6.72718 7.5 7.125V7.5ZM12.75 6.375V5.25C12.75 4.85218 12.908 4.47064 13.1893 4.18934C13.4706 3.90804 13.8522 3.75 14.25 3.75H14.625C15.0228 3.75 15.4044 3.90804 15.6857 4.18934C15.967 4.47064 16.125 4.85218 16.125 5.25V7.5C16.125 7.89782 15.967 8.27936 15.6857 8.56066C15.4044 8.84196 15.0228 9 14.625 9H14.25C13.8522 9 13.4706 8.84196 13.1893 8.56066C12.908 8.27936 12.75 7.89782 12.75 7.5V6.375Z" stroke="stroke='#BC9043'" stroke-width="1.5625" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  )
  return (
    <>
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2  lg:gap-12 items-center">
          {/* Images */}
          <div className="relative h-[500px] md:h-[600px] hidden md:block">
            {/* Top Left Image - Aerial View */}
            <div className="absolute top-0 left-0 w-[80%] h-[80%] z-10">
              <img
                src="/assets/g1.jpg"
                alt="Godrej Aerial View"
                className="w-full h-full object-cover rounded-[4px] shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Bottom Right Image - Residential Building */}
            <div className="absolute bottom-0 right-0 w-[55%] h-[50%] z-20">
              <img
                src="/assets/introduction/overview.png"
                alt="Godrej Residential Building"
                className="w-full h-full object-cover rounded-[4px] shadow-xl  hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold mb-6 text-[#221628] font-['Urbanist']">
              Sumadhura Tea & Twilight 

            </h2>
            
            <p className="text-[#575556] mb-4 leading-relaxed text-sm md:text-md font-['Urbanist']">
             When architecture intertwines with artistry and luxury dances with heritage, something truly timeless comes to life. Sumadhura Tea and Twilight, an exceptional residential project by the Sumadhura Group, embodies this spirit beautifully. Nestled in the delightful neighborhood of Siddapura, Whitefield, Bangalore, this development offers a unique blend of modern comfort and the elegance of the British era.</p>       
            <p className="text-[#575556] mb-8 leading-relaxed text-sm md:text-md font-['Urbanist']">
            Spanning an impressive 20 acres, Sumadhura Tea and Twilight is envisioned as a British-themed community that celebrates refined living. It's designed for those who value sophistication, tranquility, and a sense of connection. The project boasts beautifully crafted 2, 3, and 4 BHK apartments that redefine contemporary urban living while preserving a touch of old-world charm.</p>

            {/* Buttons */}
            <div className="flex gap-[11px] md:gap-4 flex-wrap mb-6 md:mb-8 w-full justify-between md:py-2 font-['Urbanist']">
              <button className="bg-primary text-md  text-white px-4 md:px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center justify-center gap-1 md:gap-2 shadow-md cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto md:min-w-[290px]"
                onClick={()=>{setIsModalOpen(true)
                  setTitle("Download Brochure")
                }}>
                <img src="/download.svg" alt="Brochure Icon" className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" />
                Download Brochure
              </button>
              <button className="border text-md border-primary text-primary px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center justify-center gap-1 md:gap-2 cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto md:min-w-[290px]"
                  onClick={()=>{setIsModalOpen(true)
                  setTitle("Virtual Tour")
                  }}  >
                {/* <img src="/camera.svg" alt="Virtual Tour Icon" className="w-3.5 h-3.5 md:w-4.5 md:h-4.5" /> */}
                {cameraIcon}
                Virtual Tour
              </button>
            </div>

            <div  className='border mb-8'/>
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 font-['Urbanist']">
              <div className="text-center">
                <p className="text-lg md:text-[42px] font-bold text-gray-900 mb-2">30+</p>
                <p className="text-md text-[#575556]">Years of Trust</p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-[42px] font-bold text-gray-900 mb-2">52+</p>
                <p className="text-md text-[#575556]">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-lg md:text-[42px] font-bold text-gray-900 mb-2">40M+</p>
                <p className="text-md text-[#575556]">Sqft Developed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <EnquiryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title={title}
      subtitle={title === "Download Brochure" ? "Enter your name and number to get the brochure download instantly" : "Experience a virtual tour of our premium villa plots."}
      openedEventTitle = {title === "Download Brochure" ? "Contact_form_opend_overview_1" : "Contact_form_opend_overview_2"}
      submitEventTitle = {title === "Download Brochure" ? "Contact_form_submit_overview_1" : "Contact_form_submit_overview_2"}
    />
    </>
  )
}