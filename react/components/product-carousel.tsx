"use client"

import { useState, useEffect, useRef } from "react"
import type { Product } from "@/types"
import ProductCard from "./product-card"

interface ProductCarouselProps {
  products: Product[]
  onProductClick: (product: Product) => void
  onAddToCart: (product: Product) => void
  onAddToWishlist?: (product: Product) => void
}

export default function ProductCarousel({
  products,
  onProductClick,
  onAddToCart,
  onAddToWishlist,
}: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(3)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const slideWidth = 344 // 320px + 24px gap
  const totalSlides = products.length

  // Create extended array with clones for infinite loop
  const extendedProducts = [...products.slice(-3), ...products, ...products.slice(0, 3)]

  const updateCarousel = (animate = true) => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = animate ? "transform 0.5s ease" : "none"
      carouselRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
  }

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setCurrentIndex((prev) => prev + 1)

    setTimeout(() => {
      if (currentIndex + 1 >= totalSlides + 3) {
        setCurrentIndex(3)
        updateCarousel(false)
      }
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)

    setCurrentIndex((prev) => prev - 1)

    setTimeout(() => {
      if (currentIndex - 1 < 3) {
        setCurrentIndex(totalSlides + 2)
        updateCarousel(false)
      }
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    updateCarousel(true)
  }, [currentIndex])

  useEffect(() => {
    updateCarousel(false)
  }, [])

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isTransitioning])

  return (
    <section className="py-8 px-6 max-w-6xl mx-auto">
      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md border border-pink-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </button>

        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 px-5"
            style={{ width: `${extendedProducts.length * slideWidth}px` }}
          >
            {extendedProducts.map((product, index) => (
              <div key={`${product.id}-${index}`} className="flex-shrink-0 w-80">
                <ProductCard
                  product={product}
                  onClick={() => onProductClick(product)}
                  onAddToCart={() => onAddToCart(product)}
                  onAddToWishlist={onAddToWishlist}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md border border-pink-200 w-12 h-12 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all shadow-lg"
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>
    </section>
  )
}
