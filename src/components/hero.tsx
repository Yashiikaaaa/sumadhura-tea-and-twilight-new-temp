"use client";
import EnquiryModal from "@/components/EnquiryModal";
import { useState } from "react";
export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="overview"
      className="relative max-w-7xl rounded-sm mx-auto h-[458px] md:h-[560px] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/gallery/image8.png')`,
        }}
      />

      {/* Dark Gradient Overlay - from left (dark) to right (transparent) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent" />

      {/* Additional vignette overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      <div className="relative h-full flex flex-col justify-center items-center md:items-start max-w-6xl mx-auto px-4 md:px-0">
        <div className="text-white text-center md:text-left items-center md:items-start max-w-2xl">
          {/* New Launch Badge */}
          <div className="bg-[#D99B2A]/60 backdrop-blur-sm flex gap-2 items-center w-fit mx-auto md:mx-0 border border-[#D99B2A] px-3 py-1.5 rounded-full text-sm md:text-base font-bold font-['Plus_Jakarta_Sans'] mb-4">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
            >
              <g clipPath="url(#clip0_1_662)">
                <path
                  d="M8.98562 0.487184L9.85656 1.12468C10 1.22968 10.1669 1.29906 10.3422 1.32625L11.4091 1.49031C11.9369 1.57146 12.4252 1.81884 12.8029 2.1965C13.1805 2.57416 13.4279 3.06242 13.5091 3.59031L13.6722 4.65812C13.6994 4.83343 13.7687 5.00031 13.8737 5.14375L14.5112 6.01375C14.8277 6.44453 14.9984 6.96513 14.9984 7.49968C14.9984 8.03424 14.8277 8.55483 14.5112 8.98562L13.8737 9.85562C13.7683 9.99883 13.6992 10.1655 13.6722 10.3412L13.5081 11.4081C13.4271 11.9363 13.1797 12.4249 12.8018 12.8027C12.4239 13.1806 11.9354 13.428 11.4072 13.5091L10.3403 13.6731C10.1645 13.6999 9.99782 13.7691 9.85468 13.8747L8.98468 14.5122C8.55389 14.8287 8.0333 14.9994 7.49875 14.9994C6.96419 14.9994 6.4436 14.8287 6.01281 14.5122L5.14281 13.8747C4.9996 13.7692 4.83297 13.7001 4.65718 13.6731L3.59031 13.5091C3.06242 13.4279 2.57416 13.1805 2.1965 12.8029C1.81884 12.4252 1.57146 11.9369 1.49031 11.4091L1.32625 10.3422C1.29942 10.1664 1.23025 9.9997 1.12468 9.85656L0.487184 8.98656C0.170683 8.55577 0 8.03518 0 7.50062C0 6.96606 0.170683 6.44547 0.487184 6.01468L1.12468 5.14468C1.22968 5.00125 1.29906 4.83437 1.32625 4.65906L1.49031 3.59031C1.57146 3.06242 1.81884 2.57416 2.1965 2.1965C2.57416 1.81884 3.06242 1.57146 3.59031 1.49031L4.65812 1.32625C4.83343 1.29906 5.00031 1.22968 5.14375 1.12468L6.01375 0.487184C6.44453 0.170683 6.96513 0 7.49968 0C8.03424 0 8.55483 0.170683 8.98562 0.487184ZM6.84625 1.61968L5.97718 2.25718C5.65096 2.49725 5.27134 2.65456 4.87093 2.71562L3.805 2.87875C3.57234 2.91437 3.35712 3.02332 3.19069 3.18975C3.02426 3.35619 2.9153 3.5714 2.87968 3.80406L2.71656 4.86906C2.65525 5.2694 2.49796 5.64895 2.25812 5.97531L1.62062 6.84531C1.48183 7.03491 1.40701 7.26378 1.40701 7.49875C1.40701 7.73372 1.48183 7.96258 1.62062 8.15218L2.25812 9.02125C2.49812 9.3475 2.65562 9.72718 2.71656 10.1275L2.87968 11.1934C2.95281 11.6706 3.32781 12.0456 3.805 12.1187L4.87 12.2819C5.27041 12.3429 5.65002 12.5002 5.97625 12.7403L6.84625 13.3778C7.23437 13.6637 7.76406 13.6637 8.15312 13.3778L9.02218 12.7403C9.34841 12.5002 9.72802 12.3429 10.1284 12.2819L11.1944 12.1187C11.427 12.083 11.6421 11.974 11.8085 11.8076C11.9749 11.6412 12.0839 11.426 12.1197 11.1934L12.2828 10.1284C12.3439 9.72802 12.5012 9.34841 12.7412 9.02218L13.3787 8.15218C13.5181 7.96282 13.5933 7.73386 13.5933 7.49875C13.5933 7.26363 13.5181 7.03468 13.3787 6.84531L12.7412 5.97625C12.5017 5.64972 12.3444 5.27025 12.2828 4.87L12.1197 3.80406C12.0841 3.5714 11.9751 3.35619 11.8087 3.18975C11.6422 3.02332 11.427 2.91437 11.1944 2.87875L10.1294 2.71562C9.72903 2.65431 9.34948 2.49702 9.02312 2.25718L8.15312 1.61968C7.96375 1.48034 7.7348 1.40517 7.49968 1.40517C7.26457 1.40517 7.03561 1.48034 6.84625 1.61968ZM10.5747 6.35593L7.05906 9.87156C6.92722 10.0032 6.74851 10.0772 6.56218 10.0772C6.37585 10.0772 6.19714 10.0032 6.06531 9.87156L4.42468 8.23093C4.30055 8.09756 4.23295 7.92127 4.2361 7.73909C4.23925 7.55692 4.31289 7.38306 4.44156 7.25406C4.57056 7.12539 4.74442 7.05175 4.92659 7.0486C5.10877 7.04545 5.28506 7.11305 5.41843 7.23718L6.56218 8.38093L9.58093 5.36218C9.7143 5.23805 9.8906 5.17045 10.0728 5.1736C10.2549 5.17675 10.4288 5.25039 10.5578 5.37906C10.6865 5.50806 10.7601 5.68192 10.7633 5.86409C10.7664 6.04627 10.6988 6.22256 10.5747 6.35593Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_662">
                  <rect width="15" height="15" fill="white" />
                </clipPath>
              </defs>
            </svg>
            NEW LAUNCH
          </div>

          {/* Heading */}
          <h1 className="text-[36px] md:text-5xl lg:text-[58px] font-extrabold font-['Urbanist'] mb-4 leading-tight drop-shadow-2xl">
          Luxury Apartments in Whitefield
          </h1>

          {/* Description */}
          <p className="text-[16px] md:text-lg lg:text-lg mb-8 text-gray-200 font-['Urbanist'] font-bold drop-shadow-lg">
          British-Inspired Residential Community
          </p>

          {/* CTA Button */}
          <button
            className="bg-white text-primary text-base md:text-lg px-6 md:px-8 py-3 rounded-[4px] font-['Urbanist'] font-semibold cursor-pointer mx-auto md:mx-0 block md:inline-block"
            onClick={() => setIsModalOpen(true)}
          >
            Enquire Now
          </button>
        </div>
      </div>

      <EnquiryModal
        title="Enquire Now"
        subtitle="Fill out the form below and our team will get back to you shortly."
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        openedEventTitle="Contact_form_opened_hero_banner"
        submitEventTitle="Contact_form_submit_hero_banner"
      />
    </section>
  );
}
