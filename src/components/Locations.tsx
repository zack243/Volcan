'use client'

import { motion } from 'framer-motion'
import { MapPin, Store, ShoppingBag, Truck, Building2 } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const locationTypes = [
  { icon: Store, label: 'Boutiques' },
  { icon: ShoppingBag, label: 'Supermarchés' },
  { icon: Building2, label: 'Grossistes' },
  { icon: Truck, label: 'Revendeurs' },
]

export default function Locations() {
  const { t } = useLanguage()

  return (
    <section id="locations" className="relative py-24 bg-volcan-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(214,17,17,0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-volcan-red/10 border border-volcan-red/30 rounded-full mb-8">
              <MapPin className="w-10 h-10 text-volcan-red" />
            </div>
            
            <h2 className="heading-lg text-white mb-6">{t('locations.title') as string}</h2>
            <p className="text-body text-lg mb-12 max-w-2xl mx-auto">{t('locations.desc') as string}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {locationTypes.map((type, index) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-6 bg-volcan-blackLight border border-volcan-red/20 rounded-lg hover:border-volcan-red/50 transition-colors duration-300"
              >
                <type.icon className="w-8 h-8 text-volcan-red mx-auto mb-3" />
                <p className="font-montserrat text-sm text-gray-300">{type.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            {t('locations.cta') as string}
          </motion.a>
        </div>
      </div>
    </section>
  )
}
