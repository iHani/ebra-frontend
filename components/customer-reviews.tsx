import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Review {
  id: number
  author: string
  avatarUrl: string
  rating: number
  date: string
  comment: string
}

export default function CustomerReviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <div className="flex items-center gap-4">
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-3legant-gray-500 hover:bg-black text-white">Write Review</Button>
        </div>
      </div>
      <div className="mt-8">
        {reviews && reviews.length > 0 ? (
          <div className="space-y-8">{/* This part would render reviews if the API provided them */}</div>
        ) : (
          <div className="text-center py-12 border-t">
            <p className="text-3legant-gray-400">No reviews yet for this product.</p>
            <p className="text-sm text-3legant-gray-300">Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  )
}
