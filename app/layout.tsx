// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { PropsWithChildren } from 'react';
import { Providers } from '@/components/shared/Providers';
import { Navbar } from '@/components/shared/Navbar';
import { Toaster } from '@/components/nft-minter/components/ui/Toaster';
const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="en">
      <head>
        <title>Your App Title</title>
        
        <meta name="description" content="Your app description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
     <body>
     
            <Providers>
              <Toaster />
              <Navbar />
              {children}

            </Providers>
   
     </body>
      
    </html>
  )
}
