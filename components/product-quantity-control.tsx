"use client"

import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus } from "lucide-react"

export default function ProductQuantityControl({ product }: { product: Product }) {
  const { addToCart, updateQuantity, getItemQuantity } = useCart()
  const quantityInCart = getItemQuantity(product.id)

  if (quantityInCart === 0) {
    return (
      <Button
        size="lg"
        className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white shadow-lg shadow-sky-500/20 py-6 text-base"
        onClick={() => addToCart(product)}
      >
        <ShoppingCart className="mr-2 h-5 w-5" />
        Add to Cart
      </Button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <p className="font-semibold text-slate-700 dark:text-slate-300">In Cart:</p>
      <div className="flex items-center border rounded-lg">
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12"
          onClick={() => updateQuantity(product.id, quantityInCart - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-10 text-center font-bold text-lg">{quantityInCart}</span>
        <Button
          variant="ghost"
          size="icon"
          className="h-12 w-12"
          onClick={() => updateQuantity(product.id, quantityInCart + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
