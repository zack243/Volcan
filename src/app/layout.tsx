import type { Metadata } from 'next'
import { Montserrat, Poppins, Bebas_Neue } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800', '900'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'VOLCAN - Batteries Fiables, Puissantes, Durables',
  description: 'VOLCAN - Des piles conçues pour accompagner chaque moment du quotidien. Fiable, Puissante, Durable.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} ${poppins.variable} ${bebasNeue.variable}`}>
      <body className="font-poppins bg-volcan-black text-volcan-white overflow-x-hidden">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
