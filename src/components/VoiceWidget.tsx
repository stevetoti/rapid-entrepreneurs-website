'use client'

import { useState } from 'react'

export default function VoiceWidget() {
  const [isListening, setIsListening] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    if (!process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY) {
      setShowTooltip(true)
      setTimeout(() => setShowTooltip(false), 3000)
      return
    }
    setIsListening(!isListening)
  }

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 bg-dark-navy text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg animate-slide-up">
          Voice assistant coming soon!
          <div className="absolute top-full right-4 w-2 h-2 bg-dark-navy rotate-45 -mt-1"></div>
        </div>
      )}
      <button
        onClick={handleClick}
        className={`w-11 h-11 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isListening
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-deep-blue hover:bg-deep-blue/90'
        }`}
        aria-label="Voice assistant"
        title="Voice assistant"
      >
        {isListening ? (
          <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>
    </div>
  )
}
