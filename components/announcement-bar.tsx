"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-3legant-gray-500 text-white text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center h-10 relative">
        <p>
          <span className="font-semibold">30% off storewide</span> — Limited time!
        </p>
        <Link href="#" className="ml-2 font-bold underline hidden sm:flex items-center gap-1">
          Shop Now <ArrowRight className="h-4 w-4" />
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 text-white hover:bg-white/20 hover:text-white"
          onClick={() => setIsVisible(false)}
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
