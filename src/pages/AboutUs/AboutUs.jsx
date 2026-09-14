import React from 'react';
import Hero from './components/Hero';
import HowitWorks from './components/HowitWorks';
import Features from './components/Features';
import Services from './components/Services';
import TrustLogos from './components/TrustLogos';
import WhyChoose from './components/WhyChoose';
import OurTeam from './components/OurTeam';
import SEO from '../../components/Seo/Seo';

export default function AboutUs() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about ChatMentorz, our mission, vision, and the team behind the ultimate WhatsApp automation and CRM platform."
        canonical="https://chatamentors.com/about"
      />
      <div className="w-full">
        <Hero />
      <HowitWorks />  
      <Features />
      <Services />
      <TrustLogos />
      <WhyChoose />
      <OurTeam />
      </div>
    </>
  );
}
