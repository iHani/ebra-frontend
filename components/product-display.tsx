import ProductGallery from "@/components/product-gallery"
import ProductInfo from "@/components/product-info"
import ProductTabs from "@/components/product-tabs"
import type { Product } from "@/lib/types"

// This is a new component to hold the dynamic part of the product page.
// It receives the product as a prop, so it can be wrapped in Suspense.
export default function ProductDisplay({ product }: { product: Product }) {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <ProductGallery image={product.image} alt={product.title} product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ProductTabs reviews={[]} />
      </div>
    </>
  )
}
