"use client"

import type React from "react"

import { useState } from "react"

interface CheckoutFormProps {
  onSubmit: () => void
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    instructions: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const requiredFields = ["firstName", "lastName", "email", "phone", "address", "city", "zip"]
    const isValid = requiredFields.every((field) => formData[field as keyof typeof formData].trim())

    if (isValid) {
      onSubmit()
    } else {
      alert("Please fill in all required fields.")
    }
  }

  return (
    <>
      {/* Customer Information */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#d45b66] mb-6">Customer Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Delivery Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">ZIP Code</label>
              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium text-gray-700">Special Instructions (Optional)</label>
              <textarea
                name="instructions"
                value={formData.instructions}
                onChange={handleInputChange}
                rows={3}
                placeholder="Any special delivery instructions or cake customization requests..."
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition resize-none"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Payment Method */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#d45b66] mb-6">Payment Method</h2>

        <div className="space-y-4">
          {[
            { id: "credit-card", icon: "bx-credit-card", label: "Credit/Debit Card" },
            { id: "easypaisa", icon: "bx-mobile", label: "Easypaisa" },
            { id: "jazzcash", icon: "bx-wallet", label: "JazzCash" },
            { id: "cash", icon: "bx-money", label: "Cash on Delivery" },
          ].map((method) => (
            <div
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition ${
                paymentMethod === method.id
                  ? "border-[#d45b66] bg-[#fdf2f8]"
                  : "border-[#f3d9fa] hover:border-[#d45b66]"
              }`}
            >
              <input
                type="radio"
                name="payment"
                id={method.id}
                checked={paymentMethod === method.id}
                onChange={() => setPaymentMethod(method.id)}
                className="mr-3"
              />
              <i className={`bx ${method.icon} text-2xl text-[#d45b66] mr-3`}></i>
              <label htmlFor={method.id} className="flex-1 cursor-pointer font-medium">
                {method.label}
              </label>
            </div>
          ))}
        </div>

        {paymentMethod === "credit-card" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Name on Card</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
              />
            </div>
          </div>
        )}

        {paymentMethod === "easypaisa" && (
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">Easypaisa Account Number</label>
            <input
              type="text"
              placeholder="03XX-XXXXXXX"
              className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
            />
            <p className="text-sm text-gray-500 mt-2">You will receive a payment request on your Easypaisa app</p>
          </div>
        )}

        {paymentMethod === "jazzcash" && (
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">JazzCash Account Number</label>
            <input
              type="text"
              placeholder="03XX-XXXXXXX"
              className="w-full px-4 py-3 border border-[#f3d9fa] rounded-lg focus:outline-none focus:border-[#d45b66] focus:ring-2 focus:ring-[#d45b66]/20 transition"
            />
            <p className="text-sm text-gray-500 mt-2">You will receive a payment request on your JazzCash app</p>
          </div>
        )}
      </div>
    </>
  )
}
