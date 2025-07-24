"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/types"

interface ProductGalleryProps {
  image: string
  alt: string
  product: Product
}

export default function ProductGallery({ image, alt, product }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 1) // Only one image, so it always stays at index 0
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 1) % 1) // Only one image, so it always stays at index 0
  }

  return (
    <div className="flex flex-col gap-4">
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
        <div className="relative w-full aspect-square">
          <Image src={image || "/placeholder.svg"} alt={alt} fill className="object-contain p-8" />
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full h-10 w-10 shadow-md"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full h-10 w-10 shadow-md"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      {/* Thumbnail gallery is hidden as the API provides only one image */}
    </div>
  )
}
