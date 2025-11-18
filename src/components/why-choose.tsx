"use client"

import { useState, useEffect, useRef } from "react"

export default function WhyChoose() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0)
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number>(0)

  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<HTMLDivElement[]>([])

  const images = [
    { title: "Clubhouse", src: "/assets/projecthighlights/swimmingpool.png", description: "Surrounded by nature with expansive green landscapes" },
    { title: "Metro Station", src: "/assets/projecthighlights/metro.png", description: "Beautiful tree-lined pathways and open spaces" },
    { title: "Lush Greenery", src: "/assets/projecthighlights/lushgreen.png", description: "Eco-friendly environment with sustainable design" },
    { title: "70+ Amenities", src: "/assets/projecthighlights/gym.png", description: "Premium landscaping throughout the community" },
    { title: "Open Spaces", src: "/assets/projecthighlights/openspaces.png", description: "Serene living spaces with natural beauty" },
  ]

 
  // Mobile auto-expand on scroll
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      itemRefs.current.forEach((item, index) => {
        if (!item) return
        const rect = item.getBoundingClientRect()
        const itemCenter = rect.left + rect.width / 2
        const distance = Math.abs(containerCenter - itemCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setMobileExpandedIndex(closestIndex)
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setExpandedIndex(prev => (prev + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])


  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] mb-3 md:mb-4 font-extrabold font-['Urbanist'] text-[#221628]">
            Why Residents Choose Sumadhura
          <p className="text-[#433F3E] font-medium font-['Urbanist'] text-[14px] md:text-base lg:text-lg max-w-2xl">
            A perfect blend of location, lifestyle, and legacy that residents truly love.
          </p>
        </div>

        {/* Desktop Expandable Grid */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl max-h-[477px] cursor-pointer transition-all duration-700 ease-in-out ${
                expandedIndex === index ? "flex-3" : "flex-[0.7] hover:flex-[0.8]"
              }`}
              onClick={() => setExpandedIndex(index)}
              onMouseEnter={() => setExpandedIndex(index)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className={`text-white font-semibold transition-all duration-500 ${expandedIndex === index ? "text-lg mb-2" : "text-lg"}`}>
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Auto-Expand on Scroll */}
        <div className="md:hidden flex gap-3 h-[400px] overflow-x-auto scroll-smooth px-2" ref={scrollRef}>
          {images.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current[index] = el
              }}
              className={`relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-out shrink-0 ${
                mobileExpandedIndex === index ? "w-[70vw]" : "w-[35vw]"
              }`}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className={`text-white font-semibold transition-all duration-500 ${mobileExpandedIndex === index ? "text-xl" : "text-base"}`}>
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const el = itemRefs.current[index]
                if (el) el.scrollIntoView({ behavior: "smooth", inline: "center" })
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                mobileExpandedIndex === index ? "w-8 bg-gray-900" : "w-2 bg-gray-300"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
