import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Bebas_Neue } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
})

export const metadata: Metadata = {
  title: "Prepper Directory - Complete Preparedness Resource",
  description:
    "Evidence-based guides, expert-tested gear reviews, and practical skills training for every level of preparedness.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bebasNeue.variable}`}>
      <body className={`${GeistMono.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
