"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import Header from "./header"
import Footer from "./footer"
import ProductCarousel from "./product-carousel"
import ProductModal from "./product-modal"
import FloatingCart from "./floating-cart"
import Toast from "./toast"
import type { Product, CartItem } from "@/types"

interface ProductPageProps {
  title: string
  description: string
  products: Product[]
  category: string
}

export default function ProductPage({ title, description, products, category }: ProductPageProps) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState<"success" | "error">("success")
  const [showToast, setShowToast] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  const isClosingRef = useRef(false)

  useEffect(() => {
    const slug = searchParams.get("product")

    if (slug) {
      if (isClosingRef.current) return

      const currentSlug = selectedProduct ? slugify(selectedProduct.name) : null
      if (currentSlug !== slug) {
        const match = products.find((p) => slugify(p.name) === slug)
        if (match) setSelectedProduct(match)
      }
    } else {
      isClosingRef.current = false
      if (selectedProduct) setSelectedProduct(null)
    }
  }, [searchParams, products, selectedProduct])

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)

      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item))
      }

      return [...prevCart, { ...product, quantity }]
    })

    showToastMessage(`${product.name} added to order!`, "success")
    createConfetti()
  }

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    showToastMessage("Item removed from order!", "error")
  }

  const handleAddToWishlist = (product: Product) => {
    showToastMessage(`${product.name} added to wishlist!`, "success")
  }

  const handleCloseModal = () => {
    isClosingRef.current = true
    setSelectedProduct(null)

    const params = new URLSearchParams(searchParams.toString())
    params.delete("product")
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : `${pathname}`)
  }

  const showToastMessage = (message: string, type: "success" | "error" = "success") => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)

    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  const createConfetti = () => {
    const colors = ["#ec4899", "#8b5cf6", "#f59e0b", "#10b981", "#3b82f6", "#ef4444"]
    const shapes = ["circle", "square"]

    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement("div")
      const shape = shapes[Math.floor(Math.random() * shapes.length)]

      confetti.style.position = "fixed"
      confetti.style.left = Math.random() * 100 + "vw"
      confetti.style.top = "-10px"
      confetti.style.width = Math.random() * 15 + 8 + "px"
      confetti.style.height = Math.random() * 15 + 8 + "px"
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.zIndex = "9999"
      confetti.style.pointerEvents = "none"
      confetti.style.borderRadius = shape === "circle" ? "50%" : "0"

      document.body.appendChild(confetti)

      const animationDuration = Math.random() * 2 + 2
      confetti.animate(
        [
          { transform: "translateY(-10px) rotate(0deg)", opacity: 1 },
          { transform: `translateY(100vh) rotate(${Math.random() * 720}deg)`, opacity: 0 },
        ],
        {
          duration: animationDuration * 1000,
          easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        },
      )

      setTimeout(() => confetti.remove(), animationDuration * 1000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9e8ff] via-[#ffe6e9] to-[#fff9db]">
      <Header currentPage={category.toLowerCase()} />

      <main className="pt-28 pb-16">
        {/* Hero Section */}
        <section className="px-6 max-w-6xl mx-auto text-center mb-8">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl text-pink-700 mb-6 font-serif">{title}</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">{description}</p>
          </div>
        </section>

        {/* Product Carousel */}
        <ProductCarousel
          products={products}
          onProductClick={setSelectedProduct}
          onAddToCart={addToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        {/* Features Section */}
        <section className="py-16 px-6 bg-white/30 backdrop-blur-sm mt-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-pink-700 mb-4">Why Choose Our {category}?</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Every item is crafted with precision, premium ingredients, and authentic technique
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bx bx-leaf text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Ingredients</h3>
                <p className="text-gray-600">
                  Made with the finest ingredients. No artificial colors or preservatives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bx bx-palette text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Artisanal Craft</h3>
                <p className="text-gray-600">
                  Handcrafted with attention to detail, ensuring perfect texture and flavor.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="bx bx-heart text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Made with Love</h3>
                <p className="text-gray-600">Every item is baked fresh daily with passion and dedication.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Cart */}
      <FloatingCart cart={cart} onRemoveItem={removeFromCart} />

      {/* Product Modal */}
      {selectedProduct && <ProductModal product={selectedProduct} onClose={handleCloseModal} onAddToCart={addToCart} />}

      {/* Toast Notification */}
      <Toast message={toastMessage} type={toastType} show={showToast} />
    </div>
  )
}
