"use client"

import ProductPage from "@/components/product-page"
import { Suspense } from "react"

const cupcakesData = [
  {
    id: "6",
    name: "Lemon Zest Cupcake",
    price: 280,
    image: "/lemonzest.jpg",
    description: "Chocolate cupcake with fluffy white frosting drizzled with tangy lemon zest glaze.",
    category: "Citrus",
    rating: 5,
    reviews: 124,
  },
  {
    id: "7",
    name: "Cookies & Cream Cupcake",
    price: 270,
    image: "/cookie-n-cream.jpeg",
    description: "Rich chocolate cupcake topped with Oreo buttercream and crushed cookie pieces.",
    category: "Chocolate",
    rating: 5,
    reviews: 198,
  },
  {
    id: "13",
    name: "Nutella Chocolate Cupcake",
    price: 290,
    image: "/chocolate-cupcake.jpg",
    description: "Decadent chocolate cupcake with glossy Nutella frosting swirl.",
    category: "Chocolate",
    rating: 5,
    reviews: 167,
  },
  {
    id: "14",
    name: "Caramel Swirl Cupcake",
    price: 280,
    image: "/caraml.jpg",
    description: "Chocolate cupcake with vanilla buttercream topped with golden caramel drizzle.",
    category: "Classic",
    rating: 4.5,
    reviews: 201,
  },
  {
    id: "15",
    name: "Red Velvet Cupcake",
    price: 270,
    image: "/red-velvet-cupcake.jpg",
    description: "Classic red velvet cupcake with cream cheese frosting and a sweet heart topper.",
    category: "Classic",
    rating: 5,
    reviews: 143,
  },
  {
    id: "16",
    name: "Vanilla Sprinkle Cupcake",
    price: 240,
    image: "/vanilla.jpeg",
    description: "Light vanilla cupcake with creamy vanilla frosting and colorful rainbow sprinkles.",
    category: "Classic",
    rating: 4.5,
    reviews: 189,
  },
]

export default function CupcakesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading cupcakes…</div>}>
      <ProductPage
        title="Our Delightful Cupcakes"
        description="Perfectly portioned treats topped with luscious frosting and beautiful decorations. Each cupcake is a work of art."
        products={cupcakesData}
        category="Cupcakes"
      />
    </Suspense>
  )
}
