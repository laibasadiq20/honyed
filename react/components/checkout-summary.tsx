"use client"

import { useState } from "react"

interface CheckoutSummaryProps {
  subtotal: number
  deliveryFee: number
  tax: number
  total: number
  onPlaceOrder: () => void
}

export default function CheckoutSummary({ subtotal, deliveryFee, tax, total, onPlaceOrder }: CheckoutSummaryProps) {
  const [promoCode, setPromoCode] = useState("")

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg sticky top-32">
      <h2 className="text-2xl font-bold text-[#d45b66] mb-6">Order Total</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between pb-3 border-b border-[#f3d9fa]">
          <span>Subtotal</span>
          <span>Rs {subtotal.toLocaleString()}</span>
        </div>

        <div className="flex justify-between pb-3 border-b border-[#f3d9fa]">
          <span>Delivery Fee</span>
          <span>Rs {deliveryFee.toLocaleString()}</span>
        </div>

        <div className="flex justify-between pb-3 border-b border-[#f3d9fa]">
          <span>Tax</span>
          <span>Rs {Math.round(tax).toLocaleString()}</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>Rs {Math.round(total).toLocaleString()}</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-medium text-gray-700">Promo Code</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter code"
            className="flex-1 px-4 py-2 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
          />
          <button className="px-4 py-2 bg-[#d45b66] text-white rounded-lg hover:bg-[#f28c82] transition font-medium">
            Apply
          </button>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full py-4 bg-gradient-to-r from-[#f28c82] to-[#d45b66] text-white rounded-lg font-semibold hover:from-[#d45b66] hover:to-[#f28c82] transition transform hover:-translate-y-0.5 hover:shadow-lg"
      >
        Place Order
      </button>

      <p className="text-center text-sm text-gray-600 mt-4">
        By placing your order, you agree to our{" "}
        <a href="#" className="text-[#d45b66] hover:underline">
          Terms & Conditions
        </a>
      </p>
    </div>
  )
}
