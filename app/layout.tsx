import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arthur Junior | Software Engineer',
  description: 'Full-stack software engineer crafting beautiful, performant digital experiences',
  generator: 'arthurjunior.netlify.app',
  keywords: 'software engineer, web developer, full-stack, javascript, typescript, react, next.js',
  icons: {
    icon: [

      {
        url: '/logo4.png',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background dark">
      <body suppressHydrationWarning className="font-sans antialiased text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
