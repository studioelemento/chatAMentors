import React from 'react'
import SEO from '../../components/Seo/Seo'
import Hero from './components/Hero'
import TrustLogos from './components/TrustLogos'
import Showcase from './components/Showcase'
import AboutSection from './components/AboutSection'
import Features from './components/Features'
import GetInTouch from './components/GetInTouch'

export default function Home() {
  const homeSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ChatMentorz",
      "url": "https://chatamentors.com/",
      "description": "AI Business Automation & WhatsApp Marketing CRM Platform",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://chatamentors.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ChatMentorz",
      "url": "https://chatamentors.com/",
      "logo": "https://chatamentors.com/Chatmentorz.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8921675767",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Malayalam", "Hindi"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, TC 56/723, Muthukattuvila Line, Naduvath, Nemam",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "postalCode": "695020",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61578251438146",
        "https://www.youtube.com/@Chtmentorz",
        "https://www.linkedin.com/company/chat-mentorz/about/?viewAsMember=true",
        "https://www.instagram.com/chatmentorz/",
        "https://www.pinterest.com/chatmentorz/"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ChatMentorz AI Business Automation Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud, Web-based",
      "description": "All-in-one AI automation platform offering WhatsApp commerce, chatbot builder, omnichannel team inbox, template broadcasting, and CRM integration.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
      }
    }
  ];

  return (
    <>
      <SEO
        title="ChatMentorz | AI Business Automation & WhatsApp Marketing CRM Platform"
        description="Transform your business with ChatMentorz. Automate customer support, drive WhatsApp commerce sales, broadcast targeted campaigns, and manage omnichannel chats with AI."
        canonical="https://chatamentors.com/"
        keywords={[
          "AI business automation software",
          "WhatsApp marketing CRM",
          "WhatsApp chatbot builder",
          "WhatsApp commerce platform",
          "Omni-channel customer support",
          "WhatsApp broadcast messaging",
          "No-code chatbot builder",
          "WhatsApp automation India",
          "AI agents for customer service",
          "ChatMentorz"
        ]}
        schema={homeSchema}
      />
      <div className="w-full">
        <Hero />
        <TrustLogos />
        <Showcase />
        <AboutSection />
        <Features />
        <GetInTouch />
      </div>
    </>
  )
}
