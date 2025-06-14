import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Left2Right - Turn Leftover Food into the Right Cause",
  description:
    "Turn leftover food (Left) into the right cause (Right) — smart, modern, memorable. Join our mission to fight hunger and environmental waste.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
