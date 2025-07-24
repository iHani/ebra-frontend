import Link from "next/link"
import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-3legant-gray-500 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-2xl font-bold">
              Ebra Store
            </Link>
            <div className="h-6 w-px bg-3legant-gray-300 hidden sm:block" />
            <p className="text-sm text-3legant-gray-200 hidden sm:block">Gift & Decoration Store</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/" className="hover:underline">
              Shop
            </Link>
            <Link href="/product/1" className="hover:underline">
              Product
            </Link>
            <Link href="/" className="hover:underline">
              Blog
            </Link>
            <Link href="/" className="hover:underline">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="mt-10 pt-8 border-t border-3legant-gray-400 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 text-sm text-3legant-gray-200">
            <p>Copyright © 2025 Ebra Store. All rights reserved</p>
            <Link href="#" className="font-semibold">
              Privacy Policy
            </Link>
            <Link href="#" className="font-semibold">
              Terms of Use
            </Link>
          </div>
          <div className="flex gap-6">
            <Link href="#" aria-label="Instagram">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" aria-label="Youtube">
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
