import React from 'react'

export default function TrustLogos() {
  return (
    <section className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="w-full md:w-1/3">
            <h3 className="text-3xl font-bold text-white leading-tight">
              These Companies Trust ChatMentorz
            </h3>
          </div>
          
          {/* Right Logos Grid */}
          <div className="w-full md:w-2/3 flex flex-wrap md:flex-nowrap gap-4 md:gap-6 justify-center md:justify-end">
            
            <div className="bg-white rounded-xl h-24 w-[160px] flex items-center justify-center p-4 shadow-sm">
              <span className="font-bold text-gray-800 flex items-center text-lg">
                <span className="text-red-500 mr-1">O</span>nline Strikers
              </span>
            </div>
            
            <div className="bg-white rounded-xl h-24 w-[160px] flex items-center justify-center p-4 shadow-sm">
              <span className="font-bold text-blue-900 flex items-center text-lg">
                Biz<span className="text-blue-500">Molecules</span>
              </span>
            </div>
            
            <div className="bg-white rounded-xl h-24 w-[160px] flex items-center justify-center p-4 shadow-sm">
              <span className="font-bold text-blue-800 text-center leading-tight">
                DAYITWA<br/><span className="text-green-600 text-xs">Education</span>
              </span>
            </div>
            
            <div className="bg-white rounded-xl h-24 w-[160px] flex items-center justify-center p-4 shadow-sm">
              <span className="font-bold text-blue-600 flex items-center text-lg">
                <span className="text-orange-400 mr-1">H</span>SELLMERGER
              </span>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
