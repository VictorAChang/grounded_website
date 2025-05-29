import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grounded | Yoga & Coffee Shop",
  description: "Grounded Body, Brewed Soul - A unique yoga and coffee shop featuring local Michigan vendors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          themes={["light", "dark", "earthy"]}
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-amber-900 dark:bg-stone-900 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 serif-font">Grounded</h3>
                  <p>123 Serenity Street</p>
                  <p>Ann Arbor, MI 48104</p>
                  <p>Phone: (734) 555-1234</p>
                  <p>Email: hello@grounded.com</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 serif-font">Hours</h3>
                  <p>Monday - Friday: 6am - 8pm</p>
                  <p>Saturday: 7am - 9pm</p>
                  <p>Sunday: 7am - 6pm</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 serif-font">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-amber-300">
                      Instagram
                    </a>
                    <a href="#" className="hover:text-amber-300">
                      Facebook
                    </a>
                    <a href="#" className="hover:text-amber-300">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-amber-800 text-center">
                <p>© {new Date().getFullYear()} Grounded. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
