import React from 'react'
import { Bot, MessageSquare, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-6">Omnichannel Integration & AI Tools</h2>
          <p className="text-lg text-text-muted">
            Everything you need to automate support, qualify leads, and boost sales across WhatsApp, Instagram, Facebook, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">Unified Team Inbox</h3>
            <p className="text-text-muted leading-relaxed">
              Consolidate conversations from all your messaging platforms into one powerful, easy-to-use team inbox.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <Bot size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">AI-Powered Chatbots</h3>
            <p className="text-text-muted leading-relaxed">
              Deploy NLP-driven bots to handle FAQs, qualify leads, and provide instant 24/7 assistance without coding.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-gray-100 group">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-secondary mb-4">WhatsApp Commerce</h3>
            <p className="text-text-muted leading-relaxed">
              Manage catalogs, accept payments, and drive automated sales campaigns directly within WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
