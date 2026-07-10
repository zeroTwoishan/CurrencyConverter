import React from 'react'

function Headers() {
  return (
    <div className="flex flex-col items-center mb-6 text-center">
        <div className="w-20 h-20 bg-blue-600/10 border border-blue-500/20 rounded-full flex items-center justify-center p-2.5 shadow-inner backdrop-blur-md mb-3">
          <svg className="w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="header-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <path d="M 120 190 H 380 M 310 120 L 380 190 L 310 260" fill="none" stroke="url(#header-logo-grad)" strokeWidth="56" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 392 322 H 132 M 202 252 L 132 322 L 202 392" fill="none" stroke="url(#header-logo-grad)" strokeWidth="56" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Currency Converter
        </h1>
        <p className="text-white/60 text-xs mt-1 font-medium">
          Live Daily Exchange Rates
        </p>
      </div>
  )
}

export default Headers
