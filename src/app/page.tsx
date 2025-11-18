"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import ReactGA from "react-ga4"

import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import QuickStats from "@/components/quick-stats"
import Introduction from "@/components/introduction"
import WhyChoose from "@/components/why-choose"
import PricingPlots from "@/components/pricing-plots"
import LocationMap from "@/components/location-map"
import Gallery from "@/components/gallery"
import Amenities from "@/components/amenities"
import FAQs from "@/components/faqs"
import Footer from "@/components/footer"
import MasterPlan from "@/components/master-plan"


export default function Home() {
  const pathname = usePathname()

  useEffect(() => {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3J8R39GCCX"
    if (!GA_ID) return

    // initialize once
    ReactGA.initialize(GA_ID)

    // send page_view on route change / mount
    ReactGA.send({
      hitType: "pageview",
      page: pathname,
      title: document.title,
    })
  }, [pathname])
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <QuickStats />
      <Introduction />
      <WhyChoose />
      <PricingPlots />
      <LocationMap />
      <Gallery />
      <Amenities />
      <MasterPlan />
      <FAQs />
      <Footer />
    </main>
  )
}
