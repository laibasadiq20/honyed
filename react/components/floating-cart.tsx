"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import type { CartItem } from "@/types"

interface FloatingCartProps {
  cart: CartItem[]
  onRemoveItem: (productId: string) => void
}

export default function FloatingCart({ cart, onRemoveItem }: FloatingCartProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleCheckout = () => {
    if (cart.length > 0) {
      router.push("/checkout")
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-br from-white via-pink-50 to-purple-50 text-pink-600 p-4 rounded-full shadow-xl ring-2 ring-pink-200 hover:ring-purple-300 hover:bg-pink-500 hover:text-white transition-all flex items-center justify-center w-14 h-14"
        >
          <i className="bx bx-cake text-2xl"></i>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-white">
              {totalItems}
            </span>
          )}
        </button>

        {isOpen && (
          <div className="absolute bottom-20 right-0 w-96 bg-white/98 backdrop-blur-md rounded-xl shadow-2xl border border-pink-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-pink-700 flex items-center">
                <i className="bx bx-cake mr-2"></i> Your Order
                <span className="ml-3 bg-pink-100 text-pink-700 rounded-full px-3 py-1 text-sm">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all"
              >
                <i className="bx bx-x text-lg"></i>
              </button>
            </div>

            <div className="max-h-64 overflow-y-auto mb-4">
              {cart.length === 0 ? (
                <div className="text-center py-6 text-gray-500">
                  <i className="bx bx-cake text-4xl mb-2 opacity-50"></i>
                  <p>Your order is empty</p>
                  <p className="text-sm">Add some delicious treats!</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 rounded px-2 transition-all"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mr-3">
                        <i className="bx bx-cake text-pink-600"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-500">
                          Rs {item.price.toLocaleString()} × {item.quantity}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-pink-600 text-sm">
                        Rs {(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-all"
                      >
                        <i className="bx bx-trash text-sm"></i>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total:</span>
                <span className="text-pink-600">Rs {totalPrice.toLocaleString()}</span>
              </div>
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full bg-pink-500 text-white py-3 rounded-xl font-bold transition-all hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
