"use server"

import type { Product } from "@/lib/types"

type ActionResult<T> = {
  data: T | null
  error: string | null
}

export async function getProducts(): Promise<ActionResult<Product[]>> {
  try {
    const res = await fetch("https://fakestoreapi.com/products")
    if (!res.ok) {
      throw new Error(`API call failed with status: ${res.status}`)
    }
    const products: Product[] = await res.json()
    return { data: products, error: null }
  } catch (error) {
    console.error("Failed to fetch products:", error)
    return { data: null, error: error instanceof Error ? error.message : "An unknown error occurred." }
  }
}

export async function getProductById(id: string): Promise<ActionResult<Product>> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)

    // The Fake Store API returns 200 OK with an empty body for non-existent IDs.
    // We read the response as text first to check if it's empty.
    const responseText = await res.text()

    if (!responseText) {
      // This is our "Not Found" condition for this specific API.
      return { data: null, error: "Not Found" }
    }

    // If we have text, now we can safely parse it.
    const product: Product = JSON.parse(responseText)
    return { data: product, error: null }
  } catch (error) {
    console.error(`Failed to fetch or parse product with id ${id}:`, error)
    // This will catch network errors or JSON.parse errors for other malformed responses.
    if (error instanceof SyntaxError) {
      return { data: null, error: "Received malformed data from the API." }
    }
    return { data: null, error: error instanceof Error ? error.message : "An unknown error occurred." }
  }
}
