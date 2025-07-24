import { getProducts } from "@/app/actions"
import ProductGrid from "@/components/product-grid"

async function getCategories(): Promise<string[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    if (!res.ok) throw new Error("Failed to fetch categories")
    return res.json()
  } catch (error) {
    console.error(error)
    return []
  }
}

export default async function ProductList() {
  const { data: products, error } = await getProducts()

  if (error) {
    throw new Error(error)
  }

  if (!products) {
    return <div className="container mx-auto text-center py-10">No products found.</div>
  }

  const categories = await getCategories()

  return <ProductGrid products={products} categories={categories} />
}
