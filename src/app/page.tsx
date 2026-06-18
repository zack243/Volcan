'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Benefits from '@/components/Benefits'
import Uses from '@/components/Uses'
import About from '@/components/About'
import Locations from '@/components/Locations'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-volcan-black">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Uses />
      <About />
      <Locations />
      <Contact />
      <Footer />
    </main>
  )
}
