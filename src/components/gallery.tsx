"use client"

import { useState } from "react"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/assets/gallery/interior1.png", desktopCols: 1, mobileRows: 1 },
    { src: "/assets/gallery/image4.png", desktopCols: 3, mobileRows: 1 },
    { src: "/assets/gallery/gallery1.png", desktopCols: 2, mobileRows: 2 },
    { src: "/assets/gallery/image8.png", desktopCols: 3, mobileRows: 2 },
    { src: "/wimming-pool-recreation-area.jpg", desktopCols: 2, mobileRows: 3 },
    { src: "/residential-buildings-complex.jpg", desktopCols: 1, mobileRows: 3 },
  ]

  return (
    <>
      <section id="gallery" className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <div className="mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-[44px] font-extrabold mb-3 md:mb-4 text-[#221628] font-['Urbanist']">
              Envision Your New Life
            </h2>
            <p className="text-[#433F3E] text-[14px] md:text-lg font-medium font-['Urbanist'] max-w-3xl">
              Take a visual tour of the apartments, expansive clubhouse, and beautifully landscaped open spaces.
               </p>
          </div>

          {/* Desktop Grid - 3 columns with varying widths */}
          <div className="hidden md:flex md:flex-wrap gap-4 lg:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-md group cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 h-[280px] lg:h-60"
                style={{ 
                  flex: image.desktopCols === 3 ? '1 1 calc(40.666% - 16px)' : image.desktopCols === 2 ?  '1 1 calc(30.333% - 16px)' : '1 1 calc(20% - 16px)',
                  minWidth:  image.desktopCols === 3 ? '1 1 calc(40.666% - 16px)' : image.desktopCols === 2 ?  '1 1 calc(30.333% - 16px)' : '1 1 calc(20% - 16px)',
                }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>

          {/* Mobile Grid - 2 columns with varying heights */}
          <div className="flex flex-wrap md:hidden gap-2">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer shadow-md w-[48%] h-auto"
                style={{ 
                  gridColumn: image.mobileRows === 3 ? 'span 2' : image.mobileRows === 2 ? 'span 2' : 'span 1',
                  height: image.mobileRows === 3 ? '280px' : image.mobileRows === 2 ? '200px' : '140px',
                }}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover active:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 active:bg-black/20 transition-colors duration-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {/* {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-light hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={`Gallery ${selectedImage + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )} */}
    </>
  )
}