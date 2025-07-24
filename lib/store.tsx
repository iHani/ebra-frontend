"use client"

import { create } from "zustand"
import type { CartItem, Product } from "./types"
import { toast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface CartState {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],

  addToCart: (product, quantity = 1) => {
    const { items } = get()
    const existingItem = items.find((item) => item.id === product.id)

    let updatedItems: CartItem[]
    if (existingItem) {
      updatedItems = items.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
      )
    } else {
      updatedItems = [...items, { ...product, quantity }]
    }

    set({ items: updatedItems })

    toast({
      title: "✅ Item added to cart!",
      description: `"${product.title}" is now in your cart.`,
      action: (
        <Button asChild variant="secondary" size="sm">
          <Link href="/cart">View Cart</Link>
        </Button>
      ),
    })
  },

  removeFromCart: (productId) => {
    const itemToRemove = get().items.find((item) => item.id === productId)
    if (!itemToRemove) return

    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }))

    toast({
      title: "Item removed",
      variant: "destructive",
      description: `"${itemToRemove.title}" was removed from your cart.`,
    })
  },

  updateQuantity: (productId, quantity) => {
    if (quantity < 1) {
      get().removeFromCart(productId)
      return
    }

    set((state) => ({
      items: state.items.map((item) => (item.id === productId ? { ...item, quantity } : item)),
    }))
  },

  clearCart: () => set({ items: [] }),
}))
