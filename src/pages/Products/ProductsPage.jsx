import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OmniChannelTeamInbox from './components/OmniChannelTeamInbox';
import WhatsappCommerce from './components/WhatsappCommerce';
import OmnichannelCRM from './components/OmniChannelCRM';
import SmartKeywordAutomation from './components/SmartKeywordAutomation';
import WhatsappCatalogAutomation from './components/WhatsappCatalogAutomation';
import AiAgent from './components/AiAgent';
import OmniChannelAutomation from './components/OmniChannelAutomation';
import PaymentGatewayAutomationThroughWhatsapp from './components/PaymentGatewayAutomationThroughWhatsapp';
import QrCodeLinkGenerator from './components/QrCodeLinkGenerator';
import TemplateMessagingBroadcasting from './components/TemplateMessagingBroadcasting';
import NoCodeChatbotBuilder from './components/NoCodeChatbotBuilder';
import OtherFeatures from './components/OtherFeatures';

export default function ProductsPage() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="omni-channel-team-inbox" element={<OmniChannelTeamInbox />} />
        <Route path="whatsapp-commerce" element={<WhatsappCommerce />} />
        <Route path="omni-channel-crm" element={<OmnichannelCRM />} />
        <Route path="smart-keyword-automation" element={<SmartKeywordAutomation />} />
        <Route path="whatsapp-catalog-automation" element={<WhatsappCatalogAutomation />} />
        <Route path="ai-agent" element={<AiAgent />} />
        <Route path="omni-channel-automation" element={<OmniChannelAutomation />} />
        <Route path="payment-gateway-automation-through-whatsapp" element={<PaymentGatewayAutomationThroughWhatsapp />} />
        <Route path="qr-code-link-generator" element={<QrCodeLinkGenerator />} />
        <Route path="template-messaging-broadcasting" element={<TemplateMessagingBroadcasting />} />
        <Route path="no-code-chatbot-builder" element={<NoCodeChatbotBuilder />} />
        <Route path="other-features" element={<OtherFeatures />} />
      </Routes>
    </div>
  );
}
