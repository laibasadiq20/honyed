"use client"

import ProductPage from "@/components/product-page"
import { Suspense } from "react"

const donutsData = [
  {
    id: "16",
    name: "Chocolate Sprinkle Donut",
    price: 180,
    image: "/Chocolate-Donuts.png",
    description: "Fluffy donut topped with rich chocolate glaze and colorful rainbow sprinkles. A classic favorite!",
    category: "Chocolate",
    rating: 5,
    reviews: 234,
  },
  {
    id: "17",
    name: "Cream Drizzle Donut",
    price: 190,
    image: "/Cream-filled.png",
    description: "Chocolate glazed donut with elegant white cream drizzle. Rich and indulgent.",
    category: "Chocolate",
    rating: 5,
    reviews: 312,
  },
  {
    id: "18",
    name: "Rainbow Sprinkle Donut",
    price: 170,
    image: "/Rainbow-Donuts.png",
    description: "Soft donut with white vanilla frosting and festive rainbow sprinkles. Perfect for celebrations!",
    category: "Glazed",
    rating: 4.5,
    reviews: 198,
  },
  {
    id: "19",
    name: "Lotus Biscoff Donut",
    price: 200,
    image: "/Lotus-Donut.png",
    description:
      "Fluffy donut topped with creamy Lotus Biscoff spread and crunchy cookie crumbs. A caramelized delight!",
    category: "Specialty",
    rating: 5,
    reviews: 156,
  },
  {
    id: "20",
    name: "Boston Cream Donut",
    price: 210,
    image: "/Boston.png",
    description: "Classic Boston cream donut filled with vanilla custard and topped with glossy chocolate glaze.",
    category: "Filled",
    rating: 5,
    reviews: 267,
  },
]

export default function DonutsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading donuts…</div>}>
      <ProductPage
        title="Our Heavenly Donuts"
        description="Freshly made donuts with a variety of glazes, toppings, and fillings. Each one is soft, fluffy, and absolutely delicious."
        products={donutsData}
        category="Donuts"
      />
    </Suspense>
  )
}
