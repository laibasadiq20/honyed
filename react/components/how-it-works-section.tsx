"use client"

interface HowItWorksSectionProps {
  onOrderClick: () => void
}

export default function HowItWorksSection({ onOrderClick }: HowItWorksSectionProps) {
  return (
    <section className="bg-pink-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-pink-700 mb-12">How it works</h2>

        {/* Progress Line */}
        <div className="hidden md:flex items-center justify-center mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-pink-300 rounded-full z-0"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-pink-600 rounded-full z-10 animate-progress"></div>

          {/* Progress Dots */}
          <div className="relative z-20 flex justify-between w-full max-w-3xl">
            <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
              3
            </div>
            <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold shadow-lg">
              4
            </div>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7V5z" />
              </svg>
            </div>
            <h3 className="font-[Poppins] text-pink-700 text-xl md:text-2xl font-bold tracking-wide mb-2">SELECT</h3>
            <p className="mt-2 text-gray-700">
              Choose the Cakeout you want.{" "}
              <span className="font-semibold">We've got Indulgent, Lighter and Vegan & Gluten Free boxes.</span>
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#DB2777"
                className="w-12 h-12 text-pink-500"
              >
                <rect x="4" y="8" width="16" height="12" rx="2" fill="white" stroke="#DB2777" />
                <path d="M4 12h16" stroke="#DB2777" strokeWidth="1.5" />
                <path d="M12 8v12" stroke="#DB2777" strokeWidth="1.5" />
                <circle cx="9" cy="6" r="2" fill="#F1BEB5" stroke="#DB2777" />
                <circle cx="15" cy="6" r="2" fill="#F1BEB5" stroke="#DB2777" />
              </svg>
            </div>
            <h3 className="font-[Poppins] text-pink-700 text-xl md:text-2xl font-bold tracking-wide mb-2">ORDER</h3>
            <p className="mt-2 text-gray-700">
              Pop your choice – or choices – into your basket and check out via our website.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
            </div>
            <h3 className="font-[Poppins] text-pink-700 text-xl md:text-2xl font-bold tracking-wide mb-2">DELIVERED</h3>
            <p className="mt-2 text-gray-700">Your order gets delivered to your door within time.</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-white p-6 rounded-full shadow-md mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-pink-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 10h.01M15 10h.01M9 15c1.5 1 4.5 1 6 0"
                />
              </svg>
            </div>
            <h3 className="font-[Poppins] text-pink-700 text-xl md:text-2xl font-bold tracking-wide mb-2">ENJOY</h3>
            <p className="mt-2 text-gray-700">
              The best bit! Get the kettle on and enjoy with your coffee in the comfort of your home.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button
            onClick={onOrderClick}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-bold rounded-full shadow-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Order <i className="bx bx-chevron-right text-xl ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  )
}
