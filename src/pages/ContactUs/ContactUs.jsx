import React from 'react';
import SEO from '../../components/Seo/Seo';
import Hero from './components/Hero';
import ContactSection from './components/ContactSection';
import BottomSection from './components/BottomSection';

export default function ContactUs() {
  const contactSchema = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact ChatMentorz",
      "url": "https://chatamentors.com/contact",
      "description": "Contact ChatMentorz sales and support for WhatsApp automation, chatbot builders, and omnichannel CRM solutions."
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "ChatMentorz",
      "image": "https://chatamentors.com/Chatmentorz.png",
      "telephone": "+91-8921675767",
      "email": "sales@chatmentorz.in",
      "url": "https://chatamentors.com/contact",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, TC 56/723, Muthukattuvila Line, Naduvath, Nemam",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "postalCode": "695020",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "8.45494",
        "longitude": "77.00081"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  ];

  return (
    <>
      <SEO
        title="Contact Us | ChatMentorz - WhatsApp Automation & Support"
        description="Connect with ChatMentorz. Get in touch with our team for WhatsApp automation consultations, platform demos, custom API integrations, and 24/7 client support."
        canonical="https://chatamentors.com/contact"
        keywords={[
          "Contact ChatMentorz",
          "WhatsApp automation demo",
          "WhatsApp CRM support",
          "Chatbot consultation",
          "Customer support ChatMentorz",
          "WhatsApp Business API support India",
          "ChatMentorz phone number",
          "ChatMentorz address"
        ]}
        schema={contactSchema}
      />
      <div className="w-full">
        <Hero />
        <ContactSection />
        <BottomSection />
      </div>
    </>
  );
}

