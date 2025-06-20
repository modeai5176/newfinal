import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins, Space_Grotesk, Sora, Open_Sans } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: 'swap',
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: 'swap',
  preload: true,
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1a1a2e',
}

export const metadata: Metadata = {
  title: {
    default: "ModeAI - Soulful Automation & AI Solutions",
    template: "%s | ModeAI"
  },
  description: "Next-generation AI agents and intelligent business automation with human-centric design. Transform your business with ModeAI's custom AI solutions.",
  generator: "Next.js",
  applicationName: "ModeAI",
  referrer: "origin-when-cross-origin",
  keywords: ["AI automation", "business automation", "AI agents", "digital transformation", "ModeAI"],
  authors: [{ name: "ModeAI Team" }],
  creator: "ModeAI",
  publisher: "ModeAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://modeai.co'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://modeai.co',
    title: 'ModeAI - Soulful Automation & AI Solutions',
    description: 'Next-generation AI agents and intelligent business automation with human-centric design',
    siteName: 'ModeAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ModeAI - Soulful Automation & AI Solutions',
    description: 'Next-generation AI agents and intelligent business automation with human-centric design',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.webp',
    shortcut: '/images/logo.webp',
    apple: '/images/logo.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} ${sora.variable} ${openSans.variable} bg-primary-bg text-text-primary antialiased h-full m-0 p-0`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
