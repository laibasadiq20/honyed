"use client"

import { useState, useEffect, useRef } from "react"

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const reviews = [
    {
      name: "Sarah M.",
      text: "The best bakery in town! Their red velvet cake is to die for. I order it for every special occasion.",
    },
    {
      name: "Laiba.",
      text: "I'm addicted to their macarons! Perfect texture and just the right amount of sweetness. Highly recommend!",
    },
    {
      name: "Rida.",
      text: "Ordered a custom birthday cake and it was stunning! Not only beautiful but delicious too. Will definitely order again.",
    },
    {
      name: "Ahmed K.",
      text: "The Belgium Chocolate Cake is absolutely divine! Rich, moist, and perfectly balanced. My family loved it!",
    },
    {
      name: "Fatima Z.",
      text: "I've tried many bakeries, but Honeyed Bakery's Three Milk Cake is exceptional. Light, creamy, and not too sweet!",
    },
    {
      name: "Bilal R.",
      text: "The Pistachio Chocolate Cake was the highlight of our dinner party. Unique flavor combination that everyone loved!",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= reviews.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [reviews.length])

  return (
    <section className="py-16 px-4 md:px-8 bg-white/80">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#d45b66] mb-12">What Our Customers Say</h2>

        {/* Reviews Carousel */}
        <div className="reviews-carousel auto-scroll">
          <div
            ref={trackRef}
            className="reviews-track"
            style={{
              transform: `translateX(-${currentIndex * (350 + 30)}px)`,
              transition: "transform 0.7s ease",
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-200 flex items-center justify-center text-pink-700 mr-4">
                    <i className="bx bxs-quote-left"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex text-yellow-400">
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
