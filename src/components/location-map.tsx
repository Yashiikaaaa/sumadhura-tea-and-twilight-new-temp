"use client"

import { useState } from "react"

export default function LocationMap() {
  const [activeCategory, setActiveCategory] = useState<string>("hospital")

  const categories = [
    { 
      id: "hospital", 
      name: "Hospital", 
      icon: (isActive: boolean) => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.61902 17.8096H17.8095" stroke={isActive ? "white" : "#BC9043"}  strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.7619 1.61914H5.66668C3.23811 1.61914 2.42859 3.06819 2.42859 4.85724V17.8096H17V4.85724C17 3.06819 16.1905 1.61914 13.7619 1.61914Z" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11.3819 12.1428H8.03853C7.62567 12.1428 7.27759 12.4828 7.27759 12.9038V17.8095H12.1347V12.9038C12.1428 12.4828 11.8028 12.1428 11.3819 12.1428Z" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.71423 4.85718V8.9048" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.69043 6.8811H11.738" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: "schools", 
      name: "Schools", 
      icon: (isActive: boolean) => (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8125 15.0666L11 17.7736L6.1875 15.0666V12.2065L4.8125 11.4426V15.8707L11 19.3512L17.1875 15.8707V11.4426L15.8125 12.2065V15.0666Z" fill={isActive ? "white" : "#BC9043"}/>
          <path d="M11 1.97559L1.375 6.96632V8.15801L11 13.5051L19.25 8.92191V12.7188H20.625V6.96632L11 1.97559ZM17.875 8.11286L16.5 8.87671L11 11.9324L5.5 8.87671L4.125 8.11286L3.172 7.58339L11 3.52444L18.828 7.58339L17.875 8.11286Z" fill={isActive ? "white" : "#BC9043"}/>
        </svg>
      )
    },
    { 
      id: "connectivity", 
      name: "Connectivity", 
      icon: (isActive: boolean) => (
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.58333 2.5L2.5 17.5" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.418 2.5L17.4865 17.4813" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 2.5V5" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 14.5833V17.4999" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 8.33325V11.2499" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    { 
      id: "entertainment", 
      name: "Entertainment", 
      icon: (isActive: boolean) => (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.01664 10.8501C5.45867 10.8501 5.88259 10.6745 6.19515 10.3619C6.50771 10.0494 6.68331 9.62546 6.68331 9.18343C6.68331 8.7414 6.50771 8.31748 6.19515 8.00492C5.88259 7.69236 5.45867 7.51676 5.01664 7.51676C4.57461 7.51676 4.15069 7.69236 3.83813 8.00492C3.52557 8.31748 3.34998 8.7414 3.34998 9.18343C3.34998 9.62546 3.52557 10.0494 3.83813 10.3619C4.15069 10.6745 4.57461 10.8501 5.01664 10.8501ZM13.35 10.8501C13.792 10.8501 14.2159 10.6745 14.5285 10.3619C14.841 10.0494 15.0166 9.62546 15.0166 9.18343C15.0166 8.7414 14.841 8.31748 14.5285 8.00492C14.2159 7.69236 13.792 7.51676 13.35 7.51676C12.9079 7.51676 12.484 7.69236 12.1715 8.00492C11.8589 8.31748 11.6833 8.7414 11.6833 9.18343C11.6833 9.62546 11.8589 10.0494 12.1715 10.3619C12.484 10.6745 12.9079 10.8501 13.35 10.8501ZM9.18331 6.68343C9.62534 6.68343 10.0493 6.50784 10.3618 6.19528C10.6744 5.88271 10.85 5.45879 10.85 5.01676C10.85 4.57474 10.6744 4.15081 10.3618 3.83825C10.0493 3.52569 9.62534 3.3501 9.18331 3.3501C8.74128 3.3501 8.31736 3.52569 8.0048 3.83825C7.69224 4.15081 7.51664 4.57474 7.51664 5.01676C7.51664 5.45879 7.69224 5.88271 8.0048 6.19528C8.31736 6.50784 8.74128 6.68343 9.18331 6.68343ZM9.18331 15.0168C9.62534 15.0168 10.0493 14.8412 10.3618 14.5286C10.6744 14.216 10.85 13.7921 10.85 13.3501C10.85 12.9081 10.6744 12.4841 10.3618 12.1716C10.0493 11.859 9.62534 11.6834 9.18331 11.6834C8.74128 11.6834 8.31736 11.859 8.0048 12.1716C7.69224 12.4841 7.51664 12.9081 7.51664 13.3501C7.51664 13.7921 7.69224 14.216 8.0048 14.5286C8.31736 14.8412 8.74128 15.0168 9.18331 15.0168Z" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M0.849976 9.18343C0.849976 13.7859 4.58081 17.5168 9.18331 17.5168C13.7858 17.5168 17.5166 13.7859 17.5166 9.18343C17.5166 4.58093 13.7858 0.850098 9.18331 0.850098C4.58081 0.850098 0.849976 4.58093 0.849976 9.18343ZM0.849976 9.18343V17.5168" stroke={isActive ? "white" : "#BC9043"}   strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
  ]

  const locationData: Record<string, Array<{ name: string; distance: string }>> = {
    hospital: [
      
  { name: "Vydehi Institute of Medical Sciences", distance: "4 km" },
{ name: "Manipal Hospital Whitefield ", distance: "5.5 km" },
{ name: "Sakra World Hospital ", distance: "7 km" },
{ name: "Columbia Asia Hospital", distance: "5 km" },
    ],
    schools: [
    { name: "Delhi Public School Whitefield", distance: "3 km" },
{ name: "Greenwood High International Schoo", distance: "4 km" },
{ name: "Inventure Academy ", distance: "6 km" },
{ name: "Ryan International School  ", distance: "4.5 km" },

    ],
    connectivity: [
      { name: "International Tech Park Bangalore (ITPL) ", distance: "5 km" },
{ name: "EPIP Zone", distance: "6 km" },
{ name: "Bagmane Tech Park ", distance: "7 km" },
{ name: "HAL Old Airport Road", distance: "1 km" },

    ],

    entertainment: [
     { name: "Forum Shantiniketan Mall", distance: "4.5 km" },
{ name: "Phoenix Marketcity", distance: "6 km" },
{ name: "Nexus Whitefield ", distance: "5.8 km" },
{ name: "Park Square Mall", distance: "3.2   km" }

    ],
  }

  // Get the current category icon
  const getCurrentIcon = () => {
    const category = categories.find(cat => cat.id === activeCategory)
    return category?.icon(false) || null
  }

  return (
    <section id="location" className="py-12 md:py-20 bg-[#F9F4ED]">
      <div className="w-full md:max-w-7xl px-4 md:px-0 md:mx-auto">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']">
            Location & Connectivity
          </h2>
          <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl">
            Strategically located for seamless connectivity to all major landmarks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start w-full">
          {/* Map */}
          <div className="relative rounded-lg overflow-hidden shadow-lg w-full">
            <div className="relative h-[280px] sm:h-[350px] md:h-[500px] bg-neutral-200">
              {/* <img
                src="/map-showing-location-connectivity-roads-highways.jpg"
                alt="Location Map"
                className="w-full h-full object-cover scale-115"
              /> */}
               
              <iframe
                title="Location Map"
                src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1724813454653!2d77.7290625!3d12.960812500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae133e4f4be9fb%3A0xad9e4f99a4ade9a6!2sThe%20Edition%20by%20SUMADHURA!5e0!3m2!1sen!2sin!4v1763455303130!5m2!1sen!2sin" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Explore Button on Map */}
              <button className="absolute top-4 md:top-4 right-4 md:right-4 bg-primary text-white px-5 md:px-8 py-2 md:py-3 rounded-[4px] font-semibold font-['Urbanist'] text-sm md:text-[14px] transition-colors duration-300 shadow-lg cursor-pointer"
                onClick={() => {
                  window.open("https://maps.app.goo.gl/EoRs3TvMHUUKfrfXA", "_blank")
                }}
              >
                Explore
              </button>
            </div>
          </div>

          {/* Category Tabs and Details */}
          <div className="w-full md:w-full overflow-x-auto h-full scrollbar-hide">
            {/* Category Buttons */}
            <div className="flex overflow-x-auto gap-2 md:gap-3 mb-6 md:mb-8 pb-2 scrollbar-hide snap-x snap-mandatory h-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-1.5 md:gap-2.5 px-2.5 md:px-3 py-2 md:py-2.5 rounded-md font-semibold font-['Urbanist'] text-xs md:text-base transition-all duration-300 whitespace-nowrap shrink-0 snap-start ${
                    activeCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-[#221628] border border-[#E8E7E8] hover:border-primary hover:text-primary"
                  }`}
                >
                  <span className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center">
                    <div className="scale-75 md:scale-100">
                      {category.icon(activeCategory === category.id)}
                    </div>
                  </span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Location List */}
            <div className="space-y-2 md:space-y-3 bg-white rounded-lg p-2 md:p-4 border border-gray-200 shadow-sm h-[406px] overflow-y-auto scrollbar-hide">
              {locationData[activeCategory]?.map((location, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-2 md:pb-3 ${
                    index !== locationData[activeCategory].length - 1 ? "border-b border-[#E8E7E8]" : "border-b border-[#E8E7E8]"
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-[#E8E7E8] rounded-full flex items-center justify-center shrink-0">
                      <div className="scale-75 md:scale-100">
                        {getCurrentIcon()}
                      </div>
                    </div>
                    <p className="font-semibold text-[#221628] font-['Urbanist'] text-sm md:text-base truncate">
                      {location.name}
                    </p>
                  </div>
                  <span className="text-[#575556] font-medium font-['Urbanist'] text-xs md:text-sm bg-[#E8E7E8] px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap ml-2 shrink-0">
                    {location.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}