"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useCartStore } from "@/lib/store"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Heart, Star } from "lucide-react"

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  const originalPrice = product.discount ? product.price / (1 - product.discount / 100) : product.price

  return (
    <div className="group">
      <div className="relative bg-3legant-gray-100 rounded-md overflow-hidden">
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-2.5 py-1 text-sm font-bold text-3legant-gray-500 bg-white rounded">NEW</span>
          )}
          {product.discount && product.discount > 0 && (
            <span className="px-2.5 py-1 text-sm font-bold text-white bg-3legant-green rounded">
              -{product.discount}%
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-white rounded-full h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Link href={`/product/${product.id}`} className="block">
          <div className="relative w-full aspect-square">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              className="object-contain p-4"
            />
          </div>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-3legant-gray-500 text-white h-10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.round(product.rating.rate) ? "text-yellow-400" : "text-3legant-gray-200"}`}
              fill="currentColor"
            />
          ))}
        </div>
        <h3 className="font-semibold mt-2 text-sm text-3legant-gray-500 hover:text-black truncate">
          <Link href={`/product/${product.id}`}>{product.title}</Link>
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="font-bold text-sm text-3legant-gray-500">${product.price.toFixed(2)}</p>
          {product.discount && product.discount > 0 && (
            <p className="text-sm text-3legant-gray-300 line-through">${originalPrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  )
}
