import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'iFormBuilder',
  description: 'created by Tanmay Patel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain={process.env.PLAUSIBLE_DOMAIN || ""} />
      </head>
      <body className={'$(inter.className) bg-[#030014] overflow-x-hidden'}>

        {children}
        </body>
    </html>
  )
}
