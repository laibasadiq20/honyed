"use client"

import ProductPage from "@/components/product-page"
import { Suspense } from "react"

const macaronsData = [
  {
    id: "8",
    name: "Blueberry Macaron",
    price: 280,
    image: "/blubery.png",
    description:
      "Delicate blue macarons with a sweet blueberry filling. Light, airy shells with a burst of fresh berry flavor.",
    category: "Fruity",
    rating: 5,
    reviews: 87,
  },
  {
    id: "9",
    name: "Lemon Zest Macaron",
    price: 260,
    image: "/Lemon.png",
    description:
      "Tangy lemon with cream cheese filling. A zesty delight that balances sweet and tart flavors perfectly.",
    category: "Citrus",
    rating: 5,
    reviews: 142,
  },
  {
    id: "10",
    name: "Oreo Crunch Macaron",
    price: 300,
    image: "/Oreo.png",
    description:
      "Decadent chocolate shells filled with creamy Oreo filling and crunchy cookie bits. A chocolate lover's dream.",
    category: "Chocolate",
    rating: 5,
    reviews: 115,
  },
  {
    id: "11",
    name: "Pistachio Macaron",
    price: 290,
    image: "/Pistachio.png",
    description:
      "Rich pistachio cream sandwiched between delicate almond shells. A sophisticated flavor with a subtle nutty sweetness.",
    category: "Nutty",
    rating: 4.5,
    reviews: 98,
  },
  {
    id: "12",
    name: "Strawberry Macaron",
    price: 270,
    image: "/Strawberry.png",
    description:
      "Sweet strawberry ganache filling encased in delicate almond shells. A classic flavor that never disappoints.",
    category: "Fruity",
    rating: 5,
    reviews: 127,
  },
]

export default function MacaronsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading macarons…</div>}>
      <ProductPage
        title="Our Delicate Macarons"
        description="Experience the perfect blend of crisp shells and creamy fillings in our artisanal French macarons, crafted with precision and premium ingredients."
        products={macaronsData}
        category="Macarons"
      />
    </Suspense>
  )
}
