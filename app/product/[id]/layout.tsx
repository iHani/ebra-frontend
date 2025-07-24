import type React from "react"

// This layout simply passes children through. It's here to demonstrate
// the correct file structure for a production-ready app.
export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
