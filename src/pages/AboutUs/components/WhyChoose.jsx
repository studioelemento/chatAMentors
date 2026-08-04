import React from 'react';

const WhyChoose = () => {
  const tableData = [
    {
      category: 'AI Personalization',
      chatmentorz: 'Adaptive conversational AI that learns user behavior and customizes responses.',
      competitors: 'Basic NLP with generic responses.'
    },
    {
      category: 'Industry-Specific Solutions',
      chatmentorz: 'Pre-trained bots for finance, healthcare, eCommerce, and more.',
      competitors: 'Customization requires manual development.'
    },
    {
      category: 'No-Code Bot Builder',
      chatmentorz: 'Intuitive drag-and-drop interface for non-tech teams.',
      competitors: 'Developer-focused, steep learning curve.'
    },
    {
      category: 'Advanced Analytics',
      chatmentorz: 'Deep insights on user behavior, funnel drop-offs, sentiment, and engagement.',
      competitors: 'Limited analytical depth.'
    },
    {
      category: 'Omnichannel Support',
      chatmentorz: 'Unified chat across Web, WhatsApp, Messenger, and in-app.',
      competitors: 'Limited channel options.'
    },
    {
      category: 'CRM & Workflow Integrations',
      chatmentorz: 'Native support for HubSpot, Salesforce, Zoho, Slack, etc.',
      competitors: 'Minimal native integration.'
    },
    {
      category: 'Conversational Lead Generation',
      chatmentorz: 'Smart qualification flows, retargeting nudges, and A/B testing built-in.',
      competitors: 'Static lead capture forms.'
    },
    {
      category: 'Security & Compliance',
      chatmentorz: 'Enterprise-grade encryption, GDPR, HIPAA-ready.',
      competitors: 'Limited security transparency.'
    },
    {
      category: 'Support & Onboarding',
      chatmentorz: 'Dedicated success managers, 24/7 chat support.',
      competitors: 'Tiered support, delayed onboarding.'
    }
  ];

  return (
    <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-black text-center mb-12 tracking-tight">
          Why Choose ChatMentorz Over Other AI Chatbot Platforms
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse border border-gray-100">
            <thead>
              <tr className="bg-white">
                <th className="py-5 px-6 border border-gray-100 text-center font-bold text-gray-500 w-[25%] text-[17px]">
                  Category
                </th>
                <th className="py-5 px-6 border border-gray-100 text-center font-bold text-gray-500 w-[50%] text-[17px]">
                  ChatMentorz
                </th>
                <th className="py-5 px-6 border border-gray-100 text-center font-bold text-gray-500 w-[25%] text-[17px]">
                  Other Competitors
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 px-6 border border-gray-100 text-center text-gray-500 text-[15.5px]">
                    {row.category}
                  </td>
                  <td className="py-5 px-6 border border-gray-100 text-center text-gray-500 text-[15.5px] leading-relaxed">
                    {row.chatmentorz}
                  </td>
                  <td className="py-5 px-6 border border-gray-100 text-center text-gray-500 text-[15.5px] leading-relaxed">
                    {row.competitors}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
