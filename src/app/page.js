import React from 'react'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import ServicePillars from '@/components/home/ServicePillars'
import Partners from '@/components/home/Partners'
import ValuePropositionStrip from '@/components/home/ValuePropositionStrip'
import AurumFeature from '@/components/home/AurumFeature'
import Testimonials from '@/components/home/Testimonials'
import MainCTA from '@/components/global/MainCTA'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Intro />
      <ServicePillars />
      <Partners />
      <ValuePropositionStrip />
      <AurumFeature />
      <Testimonials />
      <MainCTA />
    </main>
  )
}

export default HomePage
