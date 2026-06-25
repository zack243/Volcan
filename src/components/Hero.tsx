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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-volcan-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-volcan-red/5 via-volcan-black to-[#0a0a0a]" />
        
        {/* Animated Glow */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-volcan-red/10 rounded-full blur-[150px]"
        />
        
        {/* Electric Accent */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-volcan-electric/5 to-transparent" />
        
        {/* Light Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(214, 17, 17, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(214, 17, 17, 0.5) 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-xl text-white mb-6"
            >
              <span className="block">{t('hero.title') as string}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-body text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {t('hero.subtitle') as string}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a href="#products" className="btn-primary flex items-center justify-center gap-2 group">
                {t('hero.ctaProducts') as string}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center">
                {t('hero.ctaContact') as string}
              </a>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-volcan-blackLight/50 border border-volcan-red/30 rounded-none"
                >
                  <badge.icon className="w-4 h-4 text-volcan-red" />
                  <span className="text-sm font-montserrat text-gray-300">{t(badge.key) as string}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-volcan-red/30 blur-[100px] rounded-full" />
              
              {/* Hero Image Container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="relative aspect-square">
                  <Image
                    src="/images/hero-battery.png"
                    alt="VOLCAN Battery"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 w-20 h-20"
              >
                <Zap className="w-full h-full text-volcan-electric/60" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
