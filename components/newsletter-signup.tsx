import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  return (
    <section className="bg-3legant-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="hidden md:block">
          <img src="/modern-wooden-drawer-chest.png" alt="Newsletter signup visual" className="w-full h-full object-cover" />
        </div>
        <div className="py-12 md:py-20 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-3legant-gray-500">Join Our Newsletter</h2>
          <p className="mt-2 text-lg text-3legant-gray-300">Sign up for deals, new products and promotions</p>
          <form className="mt-8 max-w-md mx-auto md:mx-0">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-3legant-gray-300" />
              <Input
                type="email"
                placeholder="Email address"
                className="h-12 pl-12 pr-28 border-0 border-b border-3legant-gray-300 rounded-none focus-visible:ring-0 focus-visible:border-b-2 focus-visible:border-3legant-gray-500 bg-transparent"
              />
              <Button
                type="submit"
                variant="link"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-3legant-gray-300 font-semibold uppercase tracking-wider"
              >
                Signup
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
