'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Clock } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const benefits = [
  {
    id: 'reliable',
    icon: Shield,
  },
  {
    id: 'powerful',
    icon: Zap,
  },
  {
    id: 'durable',
    icon: Clock,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export default function Benefits() {
  const { t } = useLanguage()

  return (
    <section id="benefits" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-volcan-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-volcan-electric/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-volcan-black mb-4">
            {t('benefits.title') as string}
          </h2>
          <div className="w-24 h-1 bg-volcan-red mx-auto" />
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full p-8 bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 hover:border-volcan-red/50 hover:shadow-[0_10px_40px_rgba(214,17,17,0.12)]">
                {/* Animated Border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-volcan-red/0 via-volcan-red/10 to-volcan-red/0" />
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-volcan-red/10 border border-volcan-red/20 rounded-lg transition-all duration-500 group-hover:bg-volcan-red/20 group-hover:border-volcan-red/40">
                    <benefit.icon className="w-8 h-8 text-volcan-red" />
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 bg-volcan-red/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="font-bebas text-3xl tracking-wider text-volcan-black mb-4">
                  {t(`benefits.${benefit.id}.title`) as string}
                </h3>
                <p className="text-body">
                  {t(`benefits.${benefit.id}.desc`) as string}
                </p>

                {/* Number Indicator */}
                <div className="absolute top-8 right-8 font-bebas text-6xl text-volcan-red/5 group-hover:text-volcan-red/10 transition-colors duration-500">
                  0{index + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
