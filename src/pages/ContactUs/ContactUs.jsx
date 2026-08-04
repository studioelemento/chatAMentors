import React from 'react';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import BottomSection from './components/BottomSection';

export default function ContactUs() {
  return (
    <div className="w-full">
      <Hero />
      <ContactSection />
      <BottomSection />
    </div>
  );
}

