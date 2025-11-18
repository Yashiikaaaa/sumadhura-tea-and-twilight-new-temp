"use client";

import React, { useEffect, useMemo, useState } from "react";
import ReactGA from "react-ga4";
import toast from "react-hot-toast";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  openedEventTitle?: string;
  submitEventTitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title = "Download Brochure",
  subtitle = "Enter your name and number to download the brochure instantly",
  openedEventTitle = "contact_form_opened",
  submitEventTitle = "contact_form_submit",
}: EnquiryModalProps) {
  // initialize GA (client-side only)
  const GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3J8R39GCCX";
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID);
    }
  }, [GA_MEASUREMENT_ID]);

  // track modal open
  useEffect(() => {
    if (GA_MEASUREMENT_ID && isOpen) {
      ReactGA.event({
        category: "Engagement",
        action: openedEventTitle,
        label: title,
      });
    }
  }, [GA_MEASUREMENT_ID, isOpen, title]);
  useEffect(() => {
    if (GA_MEASUREMENT_ID && isOpen) {
      ReactGA.event({
        category: "Engagement",
        action: "contact_form_opened",
        label: title,
      });
    }
  }, [GA_MEASUREMENT_ID, isOpen, title]);

  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
  });

  
  const [loading, setLoading] = useState(false);

  const isFormValid = useMemo(() => {
    if (!formData.name) return false;
    if (!formData.phone) return false;
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(formData.phone);
  }, [formData.name, formData.phone]);

  const utmParams = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utmSource: params.get("utm_source") || params.get("source") || null,
      utmMedium: params.get("utm_medium") || null,
      utmCampaign: params.get("utm_campaign") || null,
      utmKeyword: params.get("utm_term") || params.get("keyword") || null,
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    const phoneNumber = formData.countryCode + formData.phone;

    const payload = {
      name: formData.name.trim().toLowerCase(),
      phoneNumber: phoneNumber.trim(),
      campaign: true,
      projectId: "",
      projectName: "Sumadhura tea & twilight",
      currentAgent: "Rishu",
      utmDetails: {
        source: utmParams.utmSource || null,
        medium: utmParams.utmMedium || null,
        campaign: utmParams.utmCampaign || null,
        keyword: utmParams.utmKeyword || null,
      },
    };

    setLoading(true);

    try {
      const response = await fetch(
        "https://google-campaign-leads-service-dot-iqol-crm.uc.r.appspot.com/handleMultipleCampaignData",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      // GA conversion event on successful submit
      if (GA_MEASUREMENT_ID) {
        ReactGA.event({
          category: "Conversion",
          action: submitEventTitle,
          label: title,
          value: 1,
        });
      }
      if (GA_MEASUREMENT_ID) {
        ReactGA.event({
          category: "Conversion",
          action: "contact_form_submit",
          label: title,
          value: 1,
        });
      }

      // reset form
      setFormData({
        name: "",
        countryCode: "+91",
        phone: "",
      });

      
       toast.success("We received your info. Expect a response soon!");
    onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }

    console.log("Form submitted:", formData);

  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative w-full md:max-w-[513px] bg-white rounded-md shadow-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#F9F4ED] px-4 md:px-5 py-5.5 flex items-center justify-between border-b border-gray-200">
            <img
              src="/assets/sumadhuralogo.png"
              alt="Godrej Logo"
              className="h-10 md:h-15 w-auto"
            />
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5L5 15M5 5L15 15"
                  stroke="#2C2C2C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 md:px-8 py-4.5 md:py-4.5">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 text-[#221628] font-['Urbanist']">
              {title}
            </h2>
            <p className="text-[#5A5555] text-sm md:text-md mb-3 font-medium font-['Urbanist']">
              {subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#221628] text-md font-medium mb-1 font-['Urbanist']"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-2 md:py-3 border border-[#9498A6] rounded-md text-[#252626] placeholder:text-[#7A7B7C] focus:border-primary focus:outline-none transition-colors font-['Urbanist'] font-normal text-base"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[#221628] text-md font-medium mb-1 font-['Urbanist']"
                >
                  Phone Number
                </label>
                <div className="flex gap-1.5 md:gap-2">
                  {/* Country Code Dropdown */}
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className=" w-20 md:w-32 px-2 md:px-4 py-2 md:py-3 border border-[#9498A6] rounded-md text-[#252626] focus:border-primary focus:outline-none transition-colors font-['Urbanist'] text-base bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23575556' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+971">+971</option>
                  </select>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="0000000000"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className="flex-1 w-full px-4 py-2 md:py-3 border border-[#9498A6] rounded-md text-[#252626] placeholder:text-[#7A7B7C] focus:border-primary focus:outline-none transition-colors font-['Urbanist'] text-base"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary  text-white py-3.5 px-5 rounded-[8px] font-bold text-base font-['Urbanist'] transition-colors duration-300 shadow-lg mt-9"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Enquire"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
