import type React from "react"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  )
}
