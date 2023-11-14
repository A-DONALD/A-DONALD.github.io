import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/pages/Navbar'

export const metadata: Metadata = {
  title: 'Donald Portfolio',
  description: 'Portfolio website about Donald Youngoua - Computer science student',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gradient-to-t from-white to-slate-200'>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
