import React from 'react'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import HowItWorks from '@/components/home/HowItWorks'
import ServicesSlider from '@/components/home/ServicesSlider'
import Partners from '@/components/home/Partners'
import Clients from '@/components/home/Clients'
import ValuePropositionStrip from '@/components/home/ValuePropositionStrip'
import AurumFeature from '@/components/home/AurumFeature'
import Testimonials from '@/components/home/Testimonials'
import MainCTA from '@/components/global/MainCTA'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <HowItWorks />
      <ServicesSlider />
      <Partners />
      {/* <Clients /> */}
      <ValuePropositionStrip />
      <AurumFeature />
      <Testimonials />
      <MainCTA bgImage="/hero-3.webp" />
    </main>
  )
}

export default HomePage
