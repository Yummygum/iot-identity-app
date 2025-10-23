import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'IOTA Identity Verification',
  description: 'Digital Identity Track'
}

const RootLayout = ({
  children
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
