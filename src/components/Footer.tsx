'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const quickLinks = [
  { href: '#home', key: 'nav.home' },
  { href: '#products', key: 'nav.products' },
  { href: '#about', key: 'nav.about' },
  { href: '#contact', key: 'nav.contact' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="w-full section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="flex items-center mb-4 group">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/Volcan.png"
                  alt="VOLCAN"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                  priority
                />
              </div>
            </a>
            <p className="font-montserrat text-gray-600 text-sm max-w-xs">{t('footer.slogan') as string}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-montserrat font-bold text-volcan-black mb-4">{t('footer.quickLinks') as string}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-montserrat text-sm text-gray-600 hover:text-volcan-red transition-colors duration-300 relative group inline-flex items-center">
                    <span className="w-0 h-0.5 bg-volcan-red mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300" />
                    {t(link.key) as string}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-montserrat font-bold text-volcan-black mb-4">{t('footer.followUs') as string}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 text-gray-600 hover:bg-volcan-red hover:text-white hover:border-volcan-red transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-sm text-gray-500">{t('footer.copyright') as string}</p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 flex items-center justify-center bg-volcan-red text-white hover:bg-volcan-red/90 shadow-md shadow-volcan-red/20 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
