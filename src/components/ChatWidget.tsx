'use client'

import { useState } from 'react'

const faqs = [
  { q: 'What services do you offer?', a: 'We offer web development, mobile apps, e-commerce solutions, digital marketing, fintech/mobile money integration, and AI solutions tailored for African businesses.' },
  { q: 'Where are you located?', a: 'Our main office is at 14 Independence Avenue, East Legon, Accra, Ghana. We serve businesses across all of West Africa.' },
  { q: 'Do you support mobile money?', a: 'Yes! We specialize in mobile money integration including MTN MoMo, Vodafone Cash, and AirtelTigo Money for seamless payments.' },
  { q: 'What is Akwaaba AI?', a: 'Akwaaba AI is our AI-powered business communication platform designed specifically for African businesses. It handles customer inquiries in multiple local languages.' },
  { q: 'How can I get started?', a: 'Simply visit our Contact page or send us a message here! We offer free consultations for all new projects.' },
]

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([
    { role: 'bot', text: 'Akwaaba! 👋 Welcome to Rapid Entrepreneurs. How can we help your business grow today?' }
  ])
  const [showFaqs, setShowFaqs] = useState(true)

  const handleFaq = (faq: typeof faqs[0]) => {
    setMessages(prev => [
      ...prev,
      { role: 'user', text: faq.q },
      { role: 'bot', text: faq.a }
    ])
    setShowFaqs(false)
  }

  const resetChat = () => {
    setMessages([{ role: 'bot', text: 'Akwaaba! 👋 Welcome to Rapid Entrepreneurs. How can we help your business grow today?' }])
    setShowFaqs(true)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Window */}
      {isOpen && (
        <div 
          className="w-[350px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 animate-slide-up overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-deep-blue to-deep-blue/90 px-5 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-vibrant-orange rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">R</span>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm">Rapid Entrepreneurs</h4>
                <p className="text-green-300 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                  Online
                </p>
              </div>
            </div>
            <button onClick={resetChat} className="text-white/60 hover:text-white transition-colors" title="Reset chat">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-vibrant-orange text-white rounded-br-md'
                    : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-bl-md'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* FAQ Buttons */}
            {showFaqs && (
              <div className="space-y-2 pt-2">
                <p className="text-xs text-gray-500 font-medium">Quick questions:</p>
                {faqs.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleFaq(faq)}
                    className="block w-full text-left text-sm bg-white border border-gray-200 rounded-xl px-4 py-2.5 hover:border-vibrant-orange hover:text-vibrant-orange transition-colors"
                  >
                    {faq.q}
                  </button>
                ))}
              </div>
            )}

            {!showFaqs && (
              <button
                onClick={() => setShowFaqs(true)}
                className="text-sm text-vibrant-orange hover:underline"
              >
                Show more questions
              </button>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2">
              <a
                href="/contact"
                className="flex-1 text-center bg-vibrant-orange text-white text-sm font-medium py-2.5 rounded-xl hover:bg-orange-600 transition-colors"
              >
                Send us a message
              </a>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">Powered by Akwaaba AI</p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 bg-vibrant-orange rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat with us"
      >
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-vibrant-orange animate-pulse-ring"></span>
        )}
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  )
}
