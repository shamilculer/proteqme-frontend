import React from 'react'
import Hero from '@/components/home/Hero'
import Intro from '@/components/home/Intro'
import ServicePillars from '@/components/home/ServicePillars'
import Partners from '@/components/home/Partners'
import ValuePropositionStrip from '@/components/home/ValuePropositionStrip'
import NewsletterSignup from '@/components/home/NewsletterSignup'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <ServicePillars />
      <Partners />
      <ValuePropositionStrip />
      {/* <NewsletterSignup /> */}
    </>
  )
}

export default HomePage
