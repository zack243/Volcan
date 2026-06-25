'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

const products = [
  {
    id: 'aa',
    image: '/images/product-aa.png',
    sizes: ['AA'],
  },
  {
    id: 'aaa',
    image: '/images/product-aaa.png',
    sizes: ['AAA'],
  },
  {
    id: 'd',
    image: '/images/product-d.png',
    sizes: ['D'],
  },
  {
    id: '9v',
    image: '/images/product-9v.png',
    sizes: ['9V'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Products() {
  const { t } = useLanguage()

  return (
    <section id="products" className="relative py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(214, 17, 17, 0.8) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
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
            {t('products.title') as string}
          </h2>
          <div className="w-24 h-1 bg-volcan-red mx-auto" />
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 hover:border-volcan-red/60 hover:shadow-[0_10px_40px_rgba(214,17,17,0.15)]">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-volcan-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Product Image */}
                <div className="relative h-48 sm:h-56 flex items-center justify-center p-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={product.image}
                      alt={t(`products.${product.id}.title`) as string}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="relative p-6 border-t border-gray-100">
                  <h3 className="font-bebas text-2xl tracking-wider text-volcan-black mb-2">
                    {t(`products.${product.id}.title`) as string}
                  </h3>
                  <p className="text-body text-sm mb-4">
                    {t(`products.${product.id}.desc`) as string}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-montserrat text-volcan-red uppercase tracking-wider">
                      {t('products.ideal') as string || 'Idéal pour'}
                    </span>
                    <span className="text-xs text-gray-500">
                      {t(`products.${product.id}.uses`) as string}
                    </span>
                  </div>
                </div>

                {/* Size Tags */}
                <div className="absolute top-4 right-4 flex gap-2">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-1 bg-volcan-red/10 text-volcan-red text-xs font-montserrat font-bold rounded"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
