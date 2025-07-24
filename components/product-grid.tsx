"use client"

import { useState } from "react"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, Rows3 } from "lucide-react"

interface ProductGridProps {
  products: Product[]
  categories: string[]
}

export default function ProductGrid({ products, categories }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [visibleProducts, setVisibleProducts] = useState(8)

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h3 className="font-semibold">CATEGORIES</h3>
          <Select defaultValue="all" onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Rooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="capitalize">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-3legant-gray-300">Sort by</span>
          <Select defaultValue="latest">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="bg-3legant-gray-100">
              <LayoutGrid className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Rows3 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-3legant-gray-300">
          <p>No products found in this category.</p>
        </div>
      )}

      {visibleProducts < filteredProducts.length && (
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="h-12 px-8 bg-transparent"
            onClick={() => setVisibleProducts((prev) => prev + 8)}
          >
            Show More
          </Button>
        </div>
      )}
    </section>
  )
}
