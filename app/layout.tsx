import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Venture X Consulting",
  description: "Minimalist, modern Braze consultancy website.",
  generator: 'v0.dev',
  icons: {
    icon: '/VX.png',
    shortcut: '/VX.png',
    apple: '/VX.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-white text-black min-h-screen antialiased`}>{children}</body>
    </html>
  )
}
