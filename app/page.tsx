import { Suspense } from "react"
import { ChevronRight } from 'lucide-react'
import NewsletterSignup from "@/components/newsletter-signup"
import ProductList from "@/components/product-list"
import ProductGridSkeleton from "@/components/skeletons/product-grid-skeleton"

export default function ShopPage() {
  return (
    <>
      <section
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/elegant-living-room.png')" }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-white">
          <div className="flex items-center gap-2 text-sm">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="font-semibold">Shop</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Shop Page</h1>
          <p className="mt-2 max-w-2xl text-center">Let's design the place you always imagined.</p>
        </div>
      </section>

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductList />
      </Suspense>

      <NewsletterSignup />
    </>
  )
}
