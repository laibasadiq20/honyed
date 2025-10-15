"use client"

import type React from "react"
import Image from "next/image"
import type { Product } from "@/types"
import { useWishlist } from "@/hooks/use-wishlist"

interface ProductCardProps {
  product: Product
  onClick: () => void
  onAddToCart: () => void
  onAddToWishlist?: (product: Product) => void
}

export default function ProductCard({ product, onClick, onAddToCart, onAddToWishlist }: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()
  const isFavorite = isInWishlist(product.id)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    onAddToCart()
  }

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isFavorite) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
      if (onAddToWishlist) {
        onAddToWishlist(product)
      }
    }
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

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Premium: "bg-purple-500",
      Chocolate: "bg-amber-700",
      Classic: "bg-pink-500",
      Fruity: "bg-red-500",
      Floral: "bg-pink-400",
      Citrus: "bg-yellow-500",
      Romantic: "bg-rose-500",
      Nutty: "bg-green-600",
      Glazed: "bg-pink-500",
      Specialty: "bg-orange-500",
    }
    return colors[category] || "bg-pink-500"
  }

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full cursor-pointer transition-all hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        <span
          className={`absolute top-3 left-3 ${getCategoryColor(product.category)} text-white px-3 py-1 rounded-full text-xs font-bold`}
        >
          {product.category}
        </span>
        <button
          onClick={handleFavorite}
          className="absolute top-3 right-3 bg-white/90 text-pink-600 p-2 rounded-full hover:bg-white transition-all"
        >
          <i className={`bx ${isFavorite ? "bxs-heart text-red-500" : "bx-heart"}`}></i>
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-pink-700 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center mb-3">
          {renderStars()}
          <span className="text-gray-500 text-xs ml-2">({product.reviews} reviews)</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Rs {product.price.toLocaleString()}</div>
          <button
            onClick={handleAddToCart}
            className="bg-pink-500 text-white p-2 rounded-full hover:scale-105 transition-all hover:bg-pink-600"
          >
            <i className="bx bx-plus text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
