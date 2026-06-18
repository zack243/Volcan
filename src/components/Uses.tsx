'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

const uses = [
  { id: 'remote', image: '/images/remote.png' },
  { id: 'flashlight', image: '/images/flashlight.png' },
  { id: 'radio', image: '/images/radio.png' },
  { id: 'toys', image: '/images/toys.png' },
  { id: 'controller', image: '/images/controller.png' },
  { id: 'clock', image: '/images/clock.png' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Uses() {
  const { t } = useLanguage()

  return (
    <section id="uses" className="relative py-24 bg-volcan-black">
      <div className="relative z-10 w-full section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-white mb-4">
            {t('uses.title') as string}
          </h2>
          <div className="w-24 h-1 bg-volcan-red mx-auto" />
        </motion.div>

        {/* Uses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {uses.map((use) => (
            <motion.div
              key={use.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative aspect-square bg-volcan-blackLight border border-volcan-red/20 rounded-lg overflow-hidden transition-all duration-500 hover:border-volcan-red/60">
                {/* Image */}
                <div className="absolute inset-0">
                  <Image
                    src={use.image}
                    alt={t(`uses.${use.id}`) as string}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-volcan-black via-volcan-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Red Tint on Hover */}
                <div className="absolute inset-0 bg-volcan-red/0 group-hover:bg-volcan-red/20 transition-colors duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  <h3 className="font-montserrat font-semibold text-sm text-white text-center group-hover:text-volcan-red transition-colors duration-300">
                    {t(`uses.${use.id}`) as string}
                  </h3>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-volcan-red/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
