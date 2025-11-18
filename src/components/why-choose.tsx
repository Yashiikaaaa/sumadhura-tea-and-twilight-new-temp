"use client"

import { useState, useRef, useEffect } from "react"

export default function WhyChoose() {
  const [expandedIndex] = useState(0)
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState(0)

  const scrollRef = useRef<HTMLDivElement | null>(null)
  let scrollTimeout: any = null

  const images = [
    { title: "Clubhouse", src: "/assets/projecthighlights/swimmingpool.png" },
    { title: "Metro Station", src: "/assets/projecthighlights/metro.png" },
    { title: "Lush Greenary", src: "/assets/projecthighlights/lushgreen.png" },
    { title: "70+ Amenities", src: "/assets/projecthighlights/gym.png" },
    { title: "Open Spaces", src: "/assets/projecthighlights/openspaces.png" },
  ]

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    function detectClosest() {
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

    function debouncedScroll() {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(detectClosest, 80)
    }

    container.addEventListener("scroll", debouncedScroll)

    detectClosest()

    return () => container.removeEventListener("scroll", debouncedScroll)
  }, [])

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-0">

        {/* MOBILE — SCROLL TO EXPAND */}
        <div
          ref={scrollRef}
          className="md:hidden flex gap-3 h-[400px] overflow-x-auto snap-x snap-mandatory pb-2 scroll-smooth pr-[40vw]"
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
