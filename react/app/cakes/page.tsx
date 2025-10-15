"use client"
import ProductPage from "@/components/product-page"
import { Suspense } from "react"

const cakesData = [
  {
    id: "1",
    name: "Red Velvet Cake",
    price: 2200,
    image: "/Red-Velvet-Cake.png",
    description:
      "Classic red velvet with cream cheese frosting and red velvet crumbs on top. Moist, fluffy, and absolutely delicious.",
    category: "Classic",
    rating: 5,
    reviews: 178,
  },
  {
    id: "2",
    name: "Chocolate Fudge Cake",
    price: 2400,
    image: "/Chocolate-Fudge-Cake.png",
    description: "Decadent layered chocolate cake with white cream and chocolate shavings. A chocolate lover's dream.",
    category: "Chocolate",
    rating: 5,
    reviews: 203,
  },
  {
    id: "3",
    name: "Belgium Chocolate Cake",
    price: 2600,
    image: "/Belgium.png",
    description: "Rich Belgian chocolate cake with smooth chocolate frosting and chocolate pieces. Pure indulgence.",
    category: "Premium",
    rating: 5,
    reviews: 189,
  },
  {
    id: "4",
    name: "Tres Leches Cake",
    price: 2100,
    image: "/3milk.webp",
    description: "Traditional three milk cake with caramel topping and elegant piped frosting. Moist and heavenly.",
    category: "Classic",
    rating: 4.5,
    reviews: 142,
  },
  {
    id: "5",
    name: "Caramel Drip Cake",
    price: 2300,
    image: "/caramal.jpeg",
    description: "Delicious cake with caramel drizzle and decorative elements. Perfect for caramel lovers.",
    category: "Premium",
    rating: 4.5,
    reviews: 156,
  },
  {
    id: "6",
    name: "Pistachio Cake",
    price: 2500,
    image: "/Pistachio.jpg",
    description: "Exotic pistachio cake covered in crushed pistachios. A unique and delightful flavor experience.",
    category: "Specialty",
    rating: 5,
    reviews: 167,
  },
  {
    id: "7",
    name: "Lotus Biscoff Cake",
    price: 2400,
    image: "/Lotus-Cake.png",
    description: "White cake with caramel Lotus Biscoff drip on a crystal stand. Sweet, creamy, and irresistible.",
    category: "Specialty",
    rating: 5,
    reviews: 194,
  },
]

export default function CakesPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading cakes…</div>}>
      <ProductPage
        title="Our Exquisite Cakes"
        description="Indulge in our handcrafted cakes, made with premium ingredients and decorated with artistic precision for your special moments."
        products={cakesData}
        category="Cakes"
      />
    </Suspense>
  )
}
