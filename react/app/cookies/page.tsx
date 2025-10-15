"use client"

import ProductPage from "@/components/product-page"
import { Suspense } from "react"

const cookiesData = [
  {
    id: "21",
    name: "Nutella Cookie",
    price: 150,
    image: "/Nutella.jpg",
    description: "Large golden cookie with rich Nutella filling. Crispy edges with a gooey chocolate center.",
    category: "Chocolate",
    rating: 5,
    reviews: 456,
  },
  {
    id: "22",
    name: "White Chocolate Chunk Cookie",
    price: 140,
    image: "/White-Chocolate.jpg",
    description: "Golden cookie loaded with premium white chocolate chunks. Soft and chewy texture.",
    category: "Chocolate",
    rating: 5,
    reviews: 389,
  },
  {
    id: "23",
    name: "Chunky Blend Cookie",
    price: 160,
    image: "/Chunky-blend.jpg",
    description: "Mixed chocolate and vanilla cookies with chocolate chunks. Perfect combination of flavors.",
    category: "Specialty",
    rating: 4.5,
    reviews: 234,
  },
  {
    id: "24",
    name: "Lotus Biscoff Cookie",
    price: 145,
    image: "/Lotus.jpg",
    description: "Cookie infused with Lotus Biscoff spread and cookie pieces. Caramelized perfection.",
    category: "Specialty",
    rating: 5,
    reviews: 312,
  },
  {
    id: "25",
    name: "Milk Chocolate Chip Cookie",
    price: 130,
    image: "/Milk-Chocolate.jpg",
    description: "Classic cookie with generous milk chocolate chips. Soft center with crispy edges.",
    category: "Classic",
    rating: 4.5,
    reviews: 278,
  },
  {
    id: "26",
    name: "Triple Chocolate Cookie",
    price: 155,
    image: "/Triple-chocolate.jpg",
    description: "Dark chocolate cookie with white chocolate chips. Rich and decadent chocolate experience.",
    category: "Chocolate",
    rating: 5,
    reviews: 421,
  },
]

export default function CookiesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading cookies…</div>}>
      <ProductPage
        title="Our Delicious Cookies"
        description="Freshly baked cookies in a variety of flavors. From classic chocolate chip to creative combinations, there's something for everyone."
        products={cookiesData}
        category="Cookies"
      />
    </Suspense>
  )
}
