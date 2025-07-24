import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import AnnouncementBar from "@/components/announcement-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ebra Store | Elegant E-Commerce",
  description: "A modern, elegant e-commerce store.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-3legant-gray-500`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
