"use client"

import { useWishlist } from "@/hooks/use-wishlist"
import Image from "next/image"

interface WishlistSidebarProps {
  isOpen: boolean
  onClose: () => void
  onAddToCart?: (product: any) => void
}

export default function WishlistSidebar({ isOpen, onClose, onAddToCart }: WishlistSidebarProps) {
  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white/98 backdrop-blur-md shadow-2xl z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-pink-200">
            <h2 className="font-bold text-2xl text-pink-700 flex items-center">
              <i className="bx bx-heart mr-2"></i> My Wishlist
              <span className="ml-3 bg-pink-100 text-pink-700 rounded-full px-3 py-1 text-sm">
                {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
              </span>
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all"
            >
              <i className="bx bx-x text-2xl"></i>
            </button>
          </div>

          {/* Wishlist Items */}
          <div className="flex-1 overflow-y-auto">
            {wishlist.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <i className="bx bx-heart text-6xl mb-4 opacity-50"></i>
                <p className="text-lg font-semibold">Your wishlist is empty</p>
                <p className="text-sm mt-2">Add items you love to your wishlist!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlist.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 rounded-xl hover:bg-pink-50 transition-all border border-transparent hover:border-pink-200"
                  >
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-pink-600">Rs {item.price.toLocaleString()}</span>
                        <div className="flex gap-2">
                          {onAddToCart && (
                            <button
                              onClick={() => onAddToCart(item)}
                              className="text-pink-600 hover:text-pink-700 hover:bg-pink-100 p-1.5 rounded-full transition-all"
                              title="Add to cart"
                            >
                              <i className="bx bx-cart text-lg"></i>
                            </button>
                          )}
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded-full transition-all"
                            title="Remove from wishlist"
                          >
                            <i className="bx bx-trash text-lg"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
