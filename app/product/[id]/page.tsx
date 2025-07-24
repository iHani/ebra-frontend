import { Suspense } from "react"
import { getProductById } from "@/app/actions"
import { notFound } from "next/navigation"
import { ChevronRight } from 'lucide-react'
import Link from "next/link"
import NewsletterSignup from "@/components/newsletter-signup"
import ProductDisplay from "@/components/product-display"
import ProductDetailSkeleton from "@/components/skeletons/product-detail-skeleton"
import type { Product } from "@/lib/types"

// This component fetches the data and is used to generate metadata
// and pass initial data to the client, but it doesn't render the main UI.
async function ProductData({ id }: { id: string }) {
  const { data: product, error } = await getProductById(id)

  if (error) {
    if (error === "Not Found") notFound()
    throw new Error(error)
  }
  if (!product) notFound()

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-3legant-gray-300">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/" className="hover:text-black capitalize">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-semibold text-3legant-gray-500 truncate">{product.title}</span>
        </div>
      </div>
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDisplay product={product} />
      </Suspense>
    </>
  )
}

export default async function ProductDetailsPage({ params }: { params: { id: string } }) {
  return (
    <>
      <ProductData id={params.id} />
      <NewsletterSignup />
    </>
  )
}
