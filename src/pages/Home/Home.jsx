import React from 'react'
import Hero from './components/Hero'
import TrustLogos from './components/TrustLogos'
import Showcase from './components/Showcase'
import AboutSection from './components/AboutSection'
import Features from './components/Features'

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <TrustLogos />
      <Showcase />
      <AboutSection />
      <Features />
    </div>
  )
}
