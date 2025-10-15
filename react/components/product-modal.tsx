"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import type { Product } from "@/types"
import { useWishlist } from "@/hooks/use-wishlist"
import Toast from "./toast"

interface ProductModalProps {
  product: Product
  onClose: () => void
  onAddToCart: (product: Product, quantity: number) => void
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1)
  const { addToWishlist, isInWishlist } = useWishlist()
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
    onClose()
  }

  const handleAddToWishlist = () => {
    addToWishlist(product)
    setToastMessage(`${product.name} added to wishlist!`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const renderStars = () => {
    const fullStars = Math.floor(product.rating)
    const hasHalfStar = product.rating % 1 !== 0

    return (
      <div className="flex text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <i key={i} className="bx bxs-star"></i>
        ))}
        {hasHalfStar && <i className="bx bxs-star-half"></i>}
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 bg-pink-500 text-white w-9 h-9 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all z-10"
        >
          <i className="bx bx-x text-2xl"></i>
        </button>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-pink-700 mb-3">{product.name}</h2>

                <div className="flex items-center mb-3">
                  {renderStars()}
                  <span className="text-gray-500 ml-2 text-sm">({product.reviews} reviews)</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
              </div>

              <div>
                <div className="text-3xl font-bold text-pink-600 mb-4">Rs {product.price.toLocaleString()}</div>

                <div className="flex items-center gap-3 mb-4">
                  <label className="font-semibold text-gray-700">Quantity:</label>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-l-lg flex items-center justify-center text-lg font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                      className="w-12 h-8 text-center border-t border-b border-gray-300 font-semibold"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-100 hover:bg-gray-200 w-8 h-8 rounded-r-lg flex items-center justify-center text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-pink-500 text-white py-3 px-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-pink-600 transition-all"
                  >
                    <i className="bx bx-cake text-lg"></i>
                    Add to Order
                  </button>
                  <button
                    onClick={handleAddToWishlist}
                    className={`border-2 py-3 px-4 rounded-lg font-bold transition-all ${
                      isInWishlist(product.id)
                        ? "border-pink-500 bg-pink-500 text-white"
                        : "border-pink-500 text-pink-500 hover:bg-pink-50"
                    }`}
                  >
                    <i className={`bx ${isInWishlist(product.id) ? "bxs-heart" : "bx-heart"} text-lg`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Toast message={toastMessage} type="success" show={showToast} />
    </div>
  )
}
