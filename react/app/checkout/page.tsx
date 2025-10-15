"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CheckoutCart from "@/components/checkout-cart"
import CheckoutForm from "@/components/checkout-form"
import CheckoutSummary from "@/components/checkout-summary"
import SuccessModal from "@/components/success-modal"

export default function CheckoutPage() {
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [currentStep, setCurrentStep] = useState(2)
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Red Velvet Cake",
      description: "6-inch, Cream Cheese Frosting",
      price: 2200,
      quantity: 1,
      image:
        "https://images.food52.com/hCMCcgnrNaS51pbWEJUbEXkrLVo=/60a6e4b8-2765-4480-88f3-f96f73107941--2022-0607_angel-food-cake-with-strawberries-and-whipped-cream_seo_3x2_mj-kroeger-067.jpg",
    },
    {
      id: "2",
      name: "French Macarons (6 pcs)",
      description: "Assorted Flavors",
      price: 800,
      quantity: 2,
      image: "https://preppykitchen.com/wp-content/uploads/2020/04/French-Macarons-feature-1200.jpg",
    },
    {
      id: "3",
      name: "Cake Pops (4 pcs)",
      description: "Chocolate & Vanilla",
      price: 1300,
      quantity: 1,
      image: "https://sallysbakingaddiction.com/wp-content/uploads/2017/07/cake-pops-recipe.jpg",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item)),
    )
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const handlePlaceOrder = () => {
    setCurrentStep(4)
    setShowSuccessModal(true)
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = 200
  const tax = subtotal * 0.08
  const total = subtotal + deliveryFee + tax

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f3d9fa] via-[#fde2e4] to-[#fff3b0]">
      <Header currentPage="checkout" />

      <main className="pt-28 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#d45b66]">Checkout</h1>
            <p className="text-lg text-gray-600 mt-2">Complete your order with ease</p>
          </div>

          {/* Step Indicator */}
          <div className="flex justify-between mb-12 relative max-w-3xl mx-auto">
            {/* Progress Line Background */}
            <div className="absolute top-[15px] left-0 right-0 h-1 bg-gradient-to-r from-pink-100 to-purple-100 z-[1] rounded-full" />
            {/* Active Progress Line */}
            <div
              className="absolute top-[15px] left-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 z-[2] rounded-full transition-all duration-500"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            />
            {[
              { num: 1, label: "Cart", icon: "bx-cart" },
              { num: 2, label: "Information", icon: "bx-info-circle" },
              { num: 3, label: "Payment", icon: "bx-credit-card" },
              { num: 4, label: "Confirmation", icon: "bx-check-circle" },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center relative z-[3]">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mb-2 transition-all shadow-md ${
                    currentStep >= step.num
                      ? step.num < currentStep
                        ? "bg-gradient-to-br from-green-400 to-green-600 text-white scale-95"
                        : "bg-gradient-to-br from-pink-500 to-purple-600 text-white scale-110 ring-4 ring-pink-200"
                      : "bg-white text-gray-400 border-2 border-pink-100"
                  }`}
                >
                  {step.num < currentStep ? (
                    <i className="bx bx-check text-xl"></i>
                  ) : (
                    <i className={`bx ${step.icon} text-lg`}></i>
                  )}
                </div>
                <div
                  className={`text-xs md:text-sm font-medium transition-all ${
                    currentStep === step.num ? "text-pink-700 font-bold" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <CheckoutCart items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
              <CheckoutForm onSubmit={handlePlaceOrder} />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-1">
              <CheckoutSummary
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                tax={tax}
                total={total}
                onPlaceOrder={handlePlaceOrder}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </div>
  )
}
