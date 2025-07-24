"use client"

import { useState } from "react"
import { useCartStore } from "@/lib/store"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Star, Heart, Minus, Plus } from "lucide-react"

export default function ProductInfo({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                product.rating && i < Math.round(product.rating.rate) ? "text-yellow-400" : "text-3legant-gray-200"
              }`}
              fill="currentColor"
            />
          ))}
        </div>
        {product.rating && <span className="text-sm text-3legant-gray-400">{product.rating.count} Reviews</span>}
      </div>
      <h1 className="text-4xl font-bold mt-4">{product.title}</h1>
      <p className="mt-4 text-3legant-gray-400">{product.description}</p>
      <div className="flex items-baseline gap-4 mt-4">
        <p className="text-3xl font-bold text-3legant-gray-500">${product.price.toFixed(2)}</p>
      </div>

      <div className="mt-6 pt-6 border-t"></div>

      <div className="mt-6 flex gap-4">
        <div className="flex items-center border rounded-md">
          <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-12 text-center font-bold">{quantity}</span>
          <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="outline" className="flex-1 h-12 bg-transparent">
          <Heart className="mr-2 h-5 w-5" /> Wishlist
        </Button>
      </div>
      <Button
        className="w-full mt-4 h-12 bg-3legant-gray-500 hover:bg-black text-white"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </Button>
      <div className="mt-6 pt-6 border-t text-sm text-3legant-gray-400 space-y-2">
        <p>
          <span className="font-semibold uppercase">CATEGORY:</span>{" "}
          <span className="capitalize">{product.category}</span>
        </p>
      </div>
    </div>
  )
}
