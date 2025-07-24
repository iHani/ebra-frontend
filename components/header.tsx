"use client"

import Link from "next/link"
import { useCartStore } from "@/lib/store"
import { Search, User, ShoppingBag, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Shop" },
  { href: "/product/1", label: "Product" },
  { href: "/", label: "Contact Us" },
]

export default function Header() {
  const items = useCartStore((state) => state.items)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-3legant-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <Link href="/" className="text-2xl font-bold">
                  Ebra Store
                </Link>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    className="text-lg font-medium text-3legant-gray-400 hover:text-3legant-gray-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 lg:flex-none">
          <Link href="/" className="text-2xl font-bold text-center lg:text-left">
            Ebra Store
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8 mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="font-medium text-3legant-gray-300 hover:text-3legant-gray-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <User className="h-6 w-6" />
          </Button>
          <Button asChild variant="ghost" size="icon" className="relative">
            <Link href="/cart">
              <ShoppingBag className="h-6 w-6" />
              {isClient && itemCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-3legant-gray-500 px-1.5 text-xs font-bold text-white transform translate-x-1/2 -translate-y-1/2">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
