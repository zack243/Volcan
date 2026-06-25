'use client'

import { motion } from 'framer-motion'
import { Zap, Battery, Clock, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

const badges = [
  { icon: Clock, key: 'hero.badge1' },
  { icon: Zap, key: 'hero.badge2' },
  { icon: Battery, key: 'hero.badge3' },
]

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-volcan-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-volcan.png"
          alt="VOLCAN Hero"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Very light overlay for readability only if needed */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Empty left column on desktop to let the background image breathe */}
          <div className="hidden lg:block" />

          {/* Right Column - Product Card + Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center"
          >
            {/* Product Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative mb-10 w-full max-w-sm"
            >
              <div className="relative p-6 sm:p-8 bg-[#050505] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <div className="relative w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72">
                    <Image
                      src="/images/pile-volcan.png"
                      alt="VOLCAN Battery"
                      fill
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                      priority
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16"
              >
                <Zap className="w-full h-full text-volcan-electric/70" />
              </motion.div>
            </motion.div>

            {/* Text Content - aligned with card width */}
            <div className="w-full max-w-sm">
              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="heading-xl text-white mb-5"
              >
                <span className="block">{t('hero.title') as string}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-lg sm:text-xl font-poppins text-white/90 mb-8"
              >
                {t('hero.subtitle') as string}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              >
                <a href="#products" className="btn-primary flex items-center justify-center gap-2 group shadow-lg shadow-black/30">
                  {t('hero.ctaProducts') as string}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="btn-secondary flex items-center justify-center bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-volcan-black">
                  {t('hero.ctaContact') as string}
                </a>
              </motion.div>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="flex flex-wrap gap-3 justify-center"
              >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.75 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                >
                  <badge.icon className="w-4 h-4 text-volcan-red" />
                  <span className="text-sm font-montserrat text-white/90">{t(badge.key) as string}</span>
                </motion.div>
              ))}
            </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
