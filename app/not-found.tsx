import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto text-center py-24 px-4">
      <h1 className="text-6xl font-bold text-3legant-gray-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-4 text-3legant-gray-400">Page Not Found</h2>
      <p className="text-3legant-gray-300 mb-8">
        We're sorry, the page you requested could not be found. Please go back to the homepage.
      </p>
      <Button asChild size="lg" className="bg-3legant-gray-500 hover:bg-black text-white h-14 px-8">
        <Link href="/">Back to Homepage</Link>
      </Button>
    </div>
  )
}
