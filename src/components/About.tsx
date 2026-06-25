'use client'

import { motion } from 'framer-motion'
import { Home, Battery, Award } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

const stats = [
  { icon: Home, key: 'about.stat1' },
  { icon: Battery, key: 'about.stat2' },
  { icon: Award, key: 'about.stat3' },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-volcan-red/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-black/10">
              <div className="absolute -inset-4 bg-volcan-red/10 blur-2xl rounded-lg" />
              <div className="relative h-full">
                <Image
                  src="/images/family.png"
                  alt="Family using VOLCAN batteries"
                  fill
                  className="object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-volcan-black/60 via-transparent to-transparent rounded-lg" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-lg text-volcan-black mb-6">{t('about.title') as string}</h2>
            <p className="text-body text-lg mb-10 max-w-lg">{t('about.desc') as string}</p>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-volcan-red/30 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-volcan-red mx-auto mb-3" />
                  <p className="font-montserrat font-semibold text-sm text-gray-700">{t(stat.key) as string}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
