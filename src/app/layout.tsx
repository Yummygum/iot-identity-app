import type { Metadata } from 'next'

import localFont from 'next/font/local'

import './globals.css'

import { ReactNode } from 'react'

const oakSans = localFont({
  src: './fonts/OakSansVF.woff2',
  variable: '--font-sans'
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
      <body className={`${oakSans.className} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
