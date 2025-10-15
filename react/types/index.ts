export interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
  category: string
  rating: number
  reviews: number
}

export interface CartItem extends Product {
  quantity: number
}
