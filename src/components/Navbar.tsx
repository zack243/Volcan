'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const navLinks = [
  { href: '#home', key: 'nav.home' },
  { href: '#products', key: 'nav.products' },
  { href: '#benefits', key: 'nav.benefits' },
  { href: '#uses', key: 'nav.uses' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg shadow-black/10 py-2'
            : 'bg-white shadow-md shadow-black/5 py-2.5'
        }`}
      >
        <div className="w-full section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center group flex-shrink-0">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16">
                <Image
                  src="/images/Volcan.png"
                  alt="VOLCAN"
                  fill
                  className="object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-montserrat text-sm xl:text-base font-medium text-volcan-black hover:text-volcan-red transition-colors duration-300 relative group"
                >
                  {t(link.key) as string}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-volcan-red group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 font-montserrat text-sm font-semibold text-volcan-black hover:text-volcan-red transition-colors duration-300"
                aria-label="Toggle language"
              >
                <span className={language === 'fr' ? 'text-volcan-red' : ''}>FR</span>
                <span className="text-gray-400">/</span>
                <span className={language === 'en' ? 'text-volcan-red' : ''}>EN</span>
              </button>

              {/* CTA Button */}
              <a
                href="#contact"
                className="bg-volcan-red text-white font-montserrat text-sm font-semibold px-5 py-2.5 hover:bg-volcan-red/90 transition-colors duration-300 shadow-md shadow-volcan-red/20"
              >
                {t('nav.contactBtn') as string}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-volcan-black hover:text-volcan-red transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" />
            <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-bebas text-3xl tracking-wider text-volcan-black hover:text-volcan-red transition-colors duration-300"
                >
                  {t(link.key) as string}
                </motion.a>
              ))}

              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="flex items-center gap-4 mt-4"
              >
                <button
                  onClick={() => {
                    toggleLanguage()
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-2 font-montserrat text-lg font-semibold text-volcan-black"
                >
                  <span className={language === 'fr' ? 'text-volcan-red' : 'text-gray-400'}>FR</span>
                  <span className="text-gray-400">/</span>
                  <span className={language === 'en' ? 'text-volcan-red' : 'text-gray-400'}>EN</span>
                </button>
              </motion.div>

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-volcan-red text-white font-montserrat text-base font-semibold px-8 py-3 mt-4 hover:bg-volcan-red/90 transition-colors duration-300"
              >
                {t('nav.contactBtn') as string}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
