import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/store/provider'
import DynamicContent from '@/components/DynamicContent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calories Burnt Prediction',
  description: 'A web application for predicting calories burnt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <DynamicContent>
          </DynamicContent>
        </Providers>
      </body>
    </html>
  )
}





