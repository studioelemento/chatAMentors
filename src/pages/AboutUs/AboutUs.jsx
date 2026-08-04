import React from 'react';
import Hero from './components/Hero';
import HowitWorks from './components/HowitWorks';
import Features from './components/Features';
import Services from './components/Services';
import TrustLogos from './components/TrustLogos';
import WhyChoose from './components/WhyChoose';
import OurTeam from './components/OurTeam';

export default function AboutUs() {
  return (
    <div className="w-full">
      <Hero />
      <HowitWorks />  
      <Features />
      <Services />
      <TrustLogos />
      <WhyChoose />
      <OurTeam />
    </div>
  );
}
