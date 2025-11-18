"use client"

import { useState, useRef, useEffect } from "react"

export default function WhyChoose() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0)

  const scrollRef = useRef<HTMLDivElement | null>(null)

  const images = [
    {
      title: "Clubhouse",
      src: "/assets/projecthighlights/swimmingpool.png",
      description: "Surrounded by nature with expansive green landscapes",
    },
    {
      title: "Metro Station",
      src: "/assets/projecthighlights/metro.png",
      description: "Beautiful tree-lined pathways and open spaces",
    },
    {
      title: "Lush Greenary",
      src: "/assets/projecthighlights/lushgreen.png",
      description: "Eco-friendly environment with sustainable design",
    },
    {
      title: "70+ Amenities",
      src: "/assets/projecthighlights/gym.png",
      description: "Premium landscaping throughout the community",
    },
    {
      title: "Open Spaces",
      src: "/assets/projecthighlights/openspaces.png",
      description: "Serene living spaces with natural beauty",
    },
  ]

  // AUTO-EXPAND BASED ON SCROLL POSITION (MOBILE)
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    function handleScroll() {
      const children = Array.from(container.children)
      let closestIndex = 0
      let closestDistance = Infinity

      const center = container.scrollLeft + container.offsetWidth / 2

      children.forEach((child, index) => {
        const el = child as HTMLElement
        const boxCenter = el.offsetLeft + el.offsetWidth / 2
        const distance = Math.abs(center - boxCenter)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setMobileExpandedIndex(closestIndex)
    }

    container.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-[44px] mb-3 md:mb-4 font-extrabold font-['Urbanist'] text-[#221628]">
            Why Residents Choose Prestige
          </h2>
          <p className="text-[#433F3E] font-medium font-['Urbanist'] text-[14px] md:text-base lg:text-lg max-w-2xl">
            A perfect blend of location, lifestyle, and legacy that residents truly love.
          </p>
        </div>

        {/* DESKTOP EXPANDABLE GRID */}
        <div className="hidden md:flex gap-4 h-[500px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl max-h-[477px] cursor-pointer transition-all duration-700 ease-in-out ${
                expandedIndex === index ? "flex-[3]" : "flex-[0.7] hover:flex-[0.8]"
              }`}
              onMouseEnter={() => setExpandedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className={`text-white font-semibold transition-all duration-500 ${
                    expandedIndex === index ? "text-lg mb-2" : "text-lg"
                  }`}
                >
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE SCROLL-EXPAND */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-3 h-[400px] overflow-x-auto snap-x snap-mandatory pb-2"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shrink-0 snap-center transition-all duration-700 ease-in-out ${
                mobileExpandedIndex === index ? "w-[70vw]" : "w-[35vw]"
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3
                  className={`text-white font-semibold transition-all duration-500 ${
                    mobileExpandedIndex === index ? "text-xl mb-2" : "text-base"
                  }`}
                >
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE INDICATORS */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setMobileExpandedIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                mobileExpandedIndex === index ? "w-8 bg-gray-900" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
