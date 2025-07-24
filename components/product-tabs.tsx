"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomerReviews from "./customer-reviews"

interface Review {
  id: number
  author: string
  avatarUrl: string
  rating: number
  date: string
  comment: string
}

export default function ProductTabs({ reviews }: { reviews: Review[] }) {
  return (
    <Tabs defaultValue="reviews" className="w-full">
      <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex bg-transparent p-0 border-b rounded-none">
        <TabsTrigger
          value="info"
          className="rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black"
        >
          Additional Info
        </TabsTrigger>
        <TabsTrigger
          value="questions"
          className="rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black"
        >
          Questions
        </TabsTrigger>
        <TabsTrigger
          value="reviews"
          className="rounded-none data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-black"
        >
          Reviews
        </TabsTrigger>
      </TabsList>
      <TabsContent value="info" className="mt-8">
        <p>Additional information about the product will be displayed here.</p>
      </TabsContent>
      <TabsContent value="questions" className="mt-8">
        <p>Frequently asked questions and answers will be displayed here.</p>
      </TabsContent>
      <TabsContent value="reviews" className="mt-8">
        <CustomerReviews reviews={reviews} />
      </TabsContent>
    </Tabs>
  )
}
