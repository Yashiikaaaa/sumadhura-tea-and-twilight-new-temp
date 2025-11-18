"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import EnquiryModal from "./EnquiryModal"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [lastClickedIndex, setLastClickedIndex] = useState<number>(0)
  const menuRef = useRef<HTMLElement | null>(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null
      if (menuRef.current && target && !menuRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const menuItems = [
    { href: "#overview", label: "Overview" },
    { href: "#configuration", label: "Configuration" },
    { href: "#location", label: "Location" },
    { href: "#gallery", label: "Gallery" },
    { href: "#master-plan", label: "Master Plan" },
    { href: "#amenities", label: "Amenities" },
    { href: "#faqs", label: "FAQs" },
    
  ]

  return (
    <>
    <nav ref={menuRef} className="sticky top-0 z-50 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center h-auto py-1">
          <div className="flex gap-3 items-center">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden p-2 border border-[#CCCBCB] rounded-md hover:bg-gray-50 transition cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
            
            {/* Logo */}
            <div>
              <img
                src={"/assets/sumadhuralogo.png"}
                alt="Godrej Logo"
                className="w-35 h-10 lg:w-60 lg:h-25
                 object-contain"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-[#2B2928] font-semibold font-['Urbanist']">
            <Link href="#overview" className="hover:text-primary transition">
              Overview
            </Link>
            <Link href="#configuration" className="hover:text-primary transition">
              Configuration
            </Link>
            <Link href="#location" className="hover:text-primary transition">
              Location
            </Link>
            <Link href="#gallery" className="hover:text-primary transition">
              Gallery
            </Link>
            <Link href="#master-plan" className="hover:text-primary transition">
              Master Plan
            </Link>
          </div>

          {/* CTA Button */}
          <button className="bg-primary text-white px-4 sm:px-6 py-2 rounded-[4px] hover:bg-primary-light transition font-semibold font-['Urbanist'] text-sm sm:text-base cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Enquire Now
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-neutral-200 bg-white">
            <div className="flex flex-col">
              {menuItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {setIsOpen(false)
                  setLastClickedIndex(index)
                  }}
                  className={`text-[#2B2928] font-[urbanist] text-[16px] font-medium py-3 px-2 hover:bg-[#F9F4ED] hover:text-primary transition-colors ${
                    index === lastClickedIndex ? 'bg-[#F9F4ED]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
    <EnquiryModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Enquire Now"
      subtitle="Fill out the form below and our team will get back to you shortly."
      openedEventTitle="Contact_form_opened_navbar"
      submitEventTitle="Contact_form_submit_navbar"
    />
    </>
  )
}