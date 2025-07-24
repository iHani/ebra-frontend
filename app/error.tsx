"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto text-center py-24 px-4">
      <h2 className="text-4xl font-bold mb-4 text-red-600">Something went wrong!</h2>
      <p className="text-3legant-gray-400 mb-8">
        We're sorry, but an unexpected error occurred. This could be a temporary issue with the network or our servers.
      </p>
      <Button onClick={() => reset()} size="lg" className="bg-3legant-gray-500 hover:bg-black text-white h-14 px-8">
        Try again
      </Button>
    </div>
  )
}
