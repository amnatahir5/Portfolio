import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// export const metadata: Metadata = {
//   title: "v0 App",
//   description: "Created with v0",
//   generator: "v0.app",
// }

export const metadata: Metadata = {
  title: "Amna Tahir | Portfolio",
  description: "Frontend web developer with keen interest in designing, building scalable and user-friendly web applications.",
  generator: "Portfolio by Amna Tahir", // you can even remove this line
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
