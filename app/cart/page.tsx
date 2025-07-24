"use client"

import { useState, useEffect } from "react"
import { useCartStore } from "@/lib/store"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X, Ticket } from "lucide-react"
import CartStepper from "@/components/cart-stepper"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const shippingOptions = [
  { id: "free", label: "Free shipping", price: 0 },
  { id: "express", label: "Express shipping", price: 15 },
  { id: "pickup", label: "Pick Up", price: 21 },
]

export default function CartPage() {
  const { items, removeFromCart, updateQuantity } = useCartStore()
  const [shippingCost, setShippingCost] = useState(shippingOptions[0].price)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-pulse">
        <div className="h-12 w-1/4 bg-slate-200 rounded-md mx-auto mb-8" />
        <div className="h-8 w-3/4 bg-slate-200 rounded-md mx-auto mb-8" />
        <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
          <div className="lg:col-span-8 space-y-4">
            <div className="h-24 bg-slate-200 rounded-md" />
            <div className="h-24 bg-slate-200 rounded-md" />
          </div>
          <div className="lg:col-span-4 h-96 bg-slate-200 rounded-md" />
        </div>
      </div>
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const finalTotal = total + shippingCost

  if (items.length === 0) {
    return (
      <div className="container mx-auto text-center py-24 px-4">
        <h1 className="text-4xl font-bold mb-4 text-3legant-gray-500">Your Cart is Empty</h1>
        <p className="text-3legant-gray-300 mb-8">Looks like you haven't added anything yet.</p>
        <Button asChild size="lg" className="bg-3legant-gray-500 hover:bg-black text-white h-14 px-8">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-5xl font-bold text-center mb-8">Cart</h1>
      <CartStepper />
      <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
        <div className="lg:col-span-8">
          <div className="hidden md:grid grid-cols-5 gap-4 text-sm font-semibold text-3legant-gray-400 uppercase pb-4 border-b">
            <div className="col-span-2">Product</div>
            <div className="text-center">Quantity</div>
            <div className="text-right">Price</div>
            <div className="text-right">Subtotal</div>
          </div>
          <div className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="py-6 md:grid md:grid-cols-5 md:gap-4 md:items-center">
                {/* --- MOBILE VIEW --- */}
                <div className="flex items-center gap-4 md:hidden">
                  <div className="relative w-24 h-24 bg-3legant-gray-100 rounded-md flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between">
                      <h2 className="font-semibold text-3legant-gray-500 hover:text-black">
                        <Link href={`/product/${item.id}`}>{item.title}</Link>
                      </h2>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto w-auto p-0 text-3legant-gray-400 hover:text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-sm text-3legant-gray-300 mt-1">Color: Black</p>
                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-9 w-9"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="font-bold text-3legant-gray-500 text-lg">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- DESKTOP VIEW --- */}
                <div className="hidden md:flex col-span-2 items-center gap-4">
                  <div className="relative w-24 h-24 bg-3legant-gray-100 rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-3legant-gray-500 hover:text-black">
                      <Link href={`/product/${item.id}`}>{item.title}</Link>
                    </h2>
                    <p className="text-sm text-3legant-gray-300">Color: Black</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-auto w-auto p-0 mt-1 text-3legant-gray-300 hover:text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <X className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </div>
                <div className="hidden md:flex justify-center">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-bold text-sm">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block text-right font-semibold text-3legant-gray-400">
                  ${item.price.toFixed(2)}
                </div>
                <div className="hidden md:block text-right font-bold text-3legant-gray-500">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-3legant-gray-500">Have a coupon?</h3>
            <p className="text-3legant-gray-300 mt-1">Add your code for an instant cart discount</p>
            <div className="flex mt-4 border rounded-md p-1">
              <div className="relative flex-grow">
                <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-3legant-gray-300" />
                <Input placeholder="Coupon Code" className="border-none pl-10 focus-visible:ring-0 h-10" />
              </div>
              <Button className="bg-3legant-gray-500 hover:bg-black text-white px-6">Apply</Button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="border p-6 rounded-md">
            <h2 className="text-xl font-bold text-3legant-gray-500 mb-6">Cart summary</h2>
            <RadioGroup
              defaultValue={shippingOptions[0].id}
              onValueChange={(id) => {
                const selected = shippingOptions.find((opt) => opt.id === id)
                setShippingCost(selected?.price ?? 0)
              }}
            >
              <div className="space-y-4">
                {shippingOptions.map((option) => (
                  <Label
                    key={option.id}
                    htmlFor={option.id}
                    className="flex justify-between items-center p-4 border rounded-md has-[:checked]:border-3legant-gray-500 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <span>{option.label}</span>
                    </div>
                    <span className="font-bold text-3legant-gray-500">
                      {option.price > 0 ? `+$${option.price.toFixed(2)}` : "$0.00"}
                    </span>
                  </Label>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-6 pt-6 border-t space-y-4">
              <div className="flex justify-between">
                <span className="text-3legant-gray-400">Subtotal</span>
                <span className="font-bold text-3legant-gray-500">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-3legant-gray-500">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full mt-6 h-12 text-md bg-3legant-gray-500 hover:bg-black text-white">Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
