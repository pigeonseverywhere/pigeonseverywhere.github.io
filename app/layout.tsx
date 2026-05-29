import React from 'react'
import { DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import ClientShell from './components/ClientShell'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--dm-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Yunshu Dai',
  description: 'Software engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${dmSans.variable} ${dmMono.variable}`}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  )
}
