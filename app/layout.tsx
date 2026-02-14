import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({ 
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
})

export const metadata = {
  title: "AmareStudy - Təhsil ilə Gələcəyini Qur",
  description: "AmareStudy - Keyfiyyətli kurslar, peşəkar müəllimlər və sertifikat proqramları ilə gələcəyinizi qurun. Veb inkişaf, dizayn, marketinq, proqramlaşdırma və daha çox sahədə kurslar.",
  keywords: "AmareStudy, kurslar, təhsil, onlayn öyrənmə, veb inkişaf, dizayn, proqramlaşdırma, sertifikat",
  icons: {
    icon: "/placeholder-logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="az" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
