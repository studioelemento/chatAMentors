import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OmniChannelTeamInbox from './components/OmniChannelTeamInbox';
import WhatsappCommerce from './components/WhatsappCommerce';
import OmnichannelCRM from './components/OmniChannelCRM';
import SmartKeywordAutomation from './components/SmartKeywordAutomation';
import WhatsappCatalogAutomation from './components/WhatsappCatalogAutomation';
import AiAgent from './components/AiAgent';

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
      </Routes>
    </div>
  );
}
