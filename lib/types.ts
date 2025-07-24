export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  // These are optional as they are not from the real API
  isNew?: boolean
  discount?: number
  measurements?: string
  sku?: string
}

export interface CartItem extends Product {
  quantity: number
}
