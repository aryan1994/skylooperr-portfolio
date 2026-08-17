import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Aryan Kumar (@skylooperr) - Founder & Builder",
  description:
    "Aryan Kumar, 14-year-old startup founder and product engineer. Founder of HydroxFlow. Winner of PitchPulse, IIT Delhi Blueprint, IIT Bombay Tatva. 13+ projects built. Building ventures that solve real problems.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: "index, follow",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_inter.variable} ${_spaceMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  ))
}
