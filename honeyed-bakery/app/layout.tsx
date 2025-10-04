import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Josefin_Sans } from "next/font/google"
import "./globals.css"

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
})

const josefinSans = Josefin_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-josefin-sans",
})

export const metadata: Metadata = {
  title: "Honeyed Bakery",
  description: "Delicious homemade baked goods by Amal",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${greatVibes.variable} ${josefinSans.variable}`}>
      <head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className={josefinSans.className}>{children}</body>
    </html>
  )
}
