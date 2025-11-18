"use client";
export default function Footer() {
  const handleCallClick = () => {
    const phoneNumber = "+919353329893";
    // use location.href to invoke the dialer (works on mobile)
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <footer className="bg-[#3A372E] text-white">
        {/* Disclaimer Section */}
        <div className="border-b border-[#4E5553]">
          <div className="max-w-7xl mx-auto px-4 md:px-0 py-12 md:py-16">
            <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold text-white text-center mb-6 md:mb-8 font-['Urbanist']">
              Disclaimer
            </h2>

            <div className="max-w-5xl mx-auto space-y-4 text-center">
              <p className="text-[#BDC0BF] text-[14px] leading-5 font-medium font-['Urbanist']">
                * The images, designs, and layouts displayed on this website are
                for representational purposes only and may not reflect the
                actual project. The developer reserves the right to make
                modifications, additions, or deletions to the project plan,
                specifications, and pricing without prior notice.
              </p>

              <p className="text-[#BDC0BF] text-[14px] leading-5 font-medium font-['Urbanist']">
                * All prices mentioned are indicative and subject to change. The
                final price will be determined based on the unit selected, floor
                level, and other factors. Please contact our sales team for the
                most current pricing and availability information.
              </p>

              <p className="text-[#BDC0BF] text-[14px] leading-5 font-medium font-['Urbanist']">
                * All amenities and facilities are subject to the terms and
                conditions laid down by the developer and may be modified based
                on government regulations, approvals, and project requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="bg-[#3A372E">
          <div className="max-w-7xl mx-auto px-4 md:px-0 py-6 md:py-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-center">
              <p className="text-[#A0A0A0] text-sm font-['Urbanist'] font-medium">
                Copyright © Authorised Marketing Partner
              </p>
              <span className="hidden md:inline text-[#A0A0A0]">|</span>
              <a
                href="https://snn-duomont.in/Terms&Condition.html"
                className="text-[#A0A0A0] hover:text-white transition-colors text-sm font-['Urbanist'] font-medium"
              >
                Terms and Condition
              </a>
              <span className="hidden md:inline text-[#A0A0A0]">|</span>
              <a
                href="https://snn-duomont.in/Privacy-policy.html"
                className="text-[#A0A0A0] hover:text-white transition-colors text-sm font-['Urbanist'] font-medium"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>
        
      </footer>
      <div className="md:hidden w-full flex flex-wrap gap-1 bg-white rounded-t-md pt-6 pr-5 pl-3 pb-5 items-center justify-between bottom-0 sticky z-20">
  <button
    className="bg-primary text-md text-white px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center gap-2 shadow-md cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto justify-center"
    onClick={handleCallClick}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.84401 2.56121C7.31161 2.65226 7.74136 2.88052 8.07824 3.21675C8.41512 3.55299 8.64381 3.98191 8.73504 4.44862M6.84401 0.649902C7.81551 0.757622 8.72144 1.19184 9.41305 1.88126C10.1047 2.57069 10.5409 3.47434 10.65 4.44384M10.1713 8.25689V9.69037C10.1718 9.82345 10.1445 9.95517 10.0911 10.0771C10.0377 10.199 9.95932 10.3085 9.86107 10.3984C9.76283 10.4884 9.64684 10.5569 9.52053 10.5995C9.39423 10.6422 9.2604 10.658 9.12761 10.646C7.65444 10.4863 6.23936 9.98383 4.99607 9.1791C3.83935 8.44547 2.85865 7.46665 2.12362 6.31214C1.31454 5.06559 0.811031 3.64635 0.653887 2.16939C0.641924 2.03725 0.657657 1.90408 0.700086 1.77835C0.742515 1.65261 0.810709 1.53708 0.900327 1.43909C0.989945 1.3411 1.09902 1.26281 1.22062 1.20921C1.34221 1.1556 1.47366 1.12785 1.60658 1.12773H3.04281C3.27514 1.12545 3.50038 1.20756 3.67654 1.35877C3.85271 1.50998 3.96777 1.71997 4.00029 1.94959C4.06091 2.40833 4.17333 2.85876 4.33541 3.29228C4.39982 3.46331 4.41376 3.64918 4.37558 3.82787C4.33739 4.00656 4.24869 4.17058 4.11997 4.30049L3.51197 4.90733C4.19349 6.10359 5.18587 7.09408 6.38442 7.77429L6.99242 7.16745C7.12258 7.03898 7.28692 6.95044 7.46595 6.91234C7.64498 6.87423 7.83121 6.88814 8.00256 6.95243C8.43691 7.1142 8.8882 7.2264 9.34783 7.28691C9.58038 7.31965 9.79277 7.43656 9.94459 7.61541C10.0964 7.79425 10.1771 8.02256 10.1713 8.25689Z"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    Contact Us
  </button>
  <button
    className="border text-md border-primary text-primary px-8 py-3 rounded-[4px] font-semibold transition-colors flex items-center gap-2 cursor-pointer min-w-[177px] flex-1 sm:flex-initial sm:w-auto justify-center"
    onClick={() => {
      window.open("https://wa.me/+919353329893", "_blank");
    }}
  >
    <img
      src="/whatsapp.svg"
      alt="whatsapp Icon"
      className="w-4.5 h-4.5"
    />
    Whatsapp
  </button>
</div>
      {/* <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Callback"
        subtitle="Enter your name and number to get a callback from our sales team"
        openedEventTitle="Contact_form_opened_footer"
        submitEventTitle="Contact_form_submit_footer"
      /> */}
    </>
  );
}
