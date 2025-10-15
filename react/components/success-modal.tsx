"use client"

import { useRouter } from "next/navigation"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const router = useRouter()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden text-center p-8 animate-[popIn_0.3s_ease-out]">
        <div className="text-[80px] text-green-500 mb-5">
          <i className="bx bx-check-circle"></i>
        </div>
        <h2 className="text-3xl font-bold text-[#d45b66] mb-4">Order Confirmed!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your order! We've sent a confirmation email with your order details.
        </p>
        <p className="text-gray-600 mb-2">
          Order #: <span className="font-semibold">HB20250315</span>
        </p>
        <p className="text-gray-600 mb-6">
          Estimated Delivery: <span className="font-semibold">Tomorrow, 2-4 PM</span>
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/")}
            className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => alert("Tracking feature coming soon!")}
            className="flex-1 py-3 bg-gradient-to-r from-[#f28c82] to-[#d45b66] text-white rounded-lg font-semibold hover:from-[#d45b66] hover:to-[#f28c82] transition"
          >
            Track Order
          </button>
        </div>
      </div>
    </div>
  )
}
