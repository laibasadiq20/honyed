export type ProductItem = {
  id: string
  name: string
  category: "Cakes" | "Cupcakes" | "Cookies" | "Macarons" | "Donuts"
  image: string
  price: number
  href: string
}

export const productsIndex: ProductItem[] = [
  // Cakes
  { id: "1", name: "Red Velvet Cake", price: 2200, image: "/Red-Velvet-Cake.png", category: "Cakes", href: "/cakes" },
  {
    id: "2",
    name: "Chocolate Fudge Cake",
    price: 2400,
    image: "/Chocolate-Fudge-Cake.png",
    category: "Cakes",
    href: "/cakes",
  },
  { id: "3", name: "Belgium Chocolate Cake", price: 2600, image: "/Belgium.png", category: "Cakes", href: "/cakes" },
  { id: "4", name: "Tres Leches Cake", price: 2100, image: "/3milk.webp", category: "Cakes", href: "/cakes" },
  { id: "5", name: "Caramel Drip Cake", price: 2300, image: "/caramal.jpeg", category: "Cakes", href: "/cakes" },
  { id: "6", name: "Pistachio Cake", price: 2500, image: "/Pistachio.jpg", category: "Cakes", href: "/cakes" },
  { id: "7", name: "Lotus Biscoff Cake", price: 2400, image: "/Lotus-Cake.png", category: "Cakes", href: "/cakes" },

  // Cupcakes
  {
    id: "13",
    name: "Nutella Chocolate Cupcake",
    price: 290,
    image: "/chocolate-cupcake.jpg",
    category: "Cupcakes",
    href: "/cupcakes",
  },
  {
    id: "14",
    name: "Caramel Swirl Cupcake",
    price: 280,
    image: "/caraml.jpg",
    category: "Cupcakes",
    href: "/cupcakes",
  },
  {
    id: "15",
    name: "Red Velvet Cupcake",
    price: 270,
    image: "/red-velvet-cupcake.jpg",
    category: "Cupcakes",
    href: "/cupcakes",
  },
  {
    id: "16",
    name: "Vanilla Sprinkle Cupcake",
    price: 240,
    image: "/vanilla.jpeg",
    category: "Cupcakes",
    href: "/cupcakes",
  },
  {
    id: "6c",
    name: "Lemon Zest Cupcake",
    price: 280,
    image: "/lemonzest.jpg",
    category: "Cupcakes",
    href: "/cupcakes",
  },
  {
    id: "7c",
    name: "Cookies & Cream Cupcake",
    price: 270,
    image: "/cookie-n-cream.jpeg",
    category: "Cupcakes",
    href: "/cupcakes",
  },

  // Macarons
  { id: "8", name: "Blueberry Macaron", price: 280, image: "/blubery.png", category: "Macarons", href: "/macarons" },
  { id: "9", name: "Lemon Zest Macaron", price: 260, image: "/Lemon.png", category: "Macarons", href: "/macarons" },
  { id: "10", name: "Oreo Crunch Macaron", price: 300, image: "/Oreo.png", category: "Macarons", href: "/macarons" },
  { id: "11", name: "Pistachio Macaron", price: 290, image: "/Pistachio.png", category: "Macarons", href: "/macarons" },
  {
    id: "12",
    name: "Strawberry Macaron",
    price: 270,
    image: "/Strawberry.png",
    category: "Macarons",
    href: "/macarons",
  },

  // Donuts
  {
    id: "16d",
    name: "Chocolate Sprinkle Donut",
    price: 180,
    image: "/Chocolate-Donuts.png",
    category: "Donuts",
    href: "/donuts",
  },
  {
    id: "17d",
    name: "Cream Drizzle Donut",
    price: 190,
    image: "/Cream-filled.png",
    category: "Donuts",
    href: "/donuts",
  },
  {
    id: "18d",
    name: "Rainbow Sprinkle Donut",
    price: 170,
    image: "/Rainbow-Donuts.png",
    category: "Donuts",
    href: "/donuts",
  },
  {
    id: "19d",
    name: "Lotus Biscoff Donut",
    price: 200,
    image: "/Lotus-Donut.png",
    category: "Donuts",
    href: "/donuts",
  },
  { id: "20d", name: "Boston Cream Donut", price: 210, image: "/Boston.png", category: "Donuts", href: "/donuts" },

  // Cookies
  { id: "21", name: "Nutella Cookie", price: 150, image: "/Nutella.jpg", category: "Cookies", href: "/cookies" },
  {
    id: "22",
    name: "White Chocolate Chunk Cookie",
    price: 140,
    image: "/White-Chocolate.jpg",
    category: "Cookies",
    href: "/cookies",
  },
  {
    id: "23",
    name: "Chunky Blend Cookie",
    price: 160,
    image: "/Chunky-blend.jpg",
    category: "Cookies",
    href: "/cookies",
  },
  { id: "24", name: "Lotus Biscoff Cookie", price: 145, image: "/Lotus.jpg", category: "Cookies", href: "/cookies" },
  {
    id: "25",
    name: "Milk Chocolate Chip Cookie",
    price: 130,
    image: "/Milk-Chocolate.jpg",
    category: "Cookies",
    href: "/cookies",
  },
  {
    id: "26",
    name: "Triple Chocolate Cookie",
    price: 155,
    image: "/Triple-chocolate.jpg",
    category: "Cookies",
    href: "/cookies",
  },
]
