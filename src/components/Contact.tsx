'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Youtube } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message envoyé ! (Simulation)')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-volcan-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-volcan-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg text-volcan-black mb-4">{t('contact.title') as string}</h2>
          <div className="w-24 h-1 bg-volcan-red mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-montserrat text-sm text-gray-700 mb-2">{t('contact.name') as string}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-volcan-black placeholder-gray-400 focus:outline-none focus:border-volcan-red focus:ring-1 focus:ring-volcan-red/20 transition-colors"
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div>
                <label className="block font-montserrat text-sm text-gray-700 mb-2">{t('contact.phone') as string}</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-volcan-black placeholder-gray-400 focus:outline-none focus:border-volcan-red focus:ring-1 focus:ring-volcan-red/20 transition-colors"
                  placeholder="+243 ..."
                />
              </div>
              <div>
                <label className="block font-montserrat text-sm text-gray-700 mb-2">{t('contact.email') as string}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-volcan-black placeholder-gray-400 focus:outline-none focus:border-volcan-red focus:ring-1 focus:ring-volcan-red/20 transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block font-montserrat text-sm text-gray-700 mb-2">{t('contact.message') as string}</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-none text-volcan-black placeholder-gray-400 focus:outline-none focus:border-volcan-red focus:ring-1 focus:ring-volcan-red/20 transition-colors resize-none"
                  placeholder="Votre message..."
                  required
                />
              </div>
              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                {t('contact.submit') as string}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-lg shadow-black/5">
              <h3 className="font-montserrat font-bold text-xl text-volcan-black mb-6">{t('contact.title') as string}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-volcan-red/10 rounded-lg">
                    <Phone className="w-5 h-5 text-volcan-red" />
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-gray-500">{t('contact.phoneLabel') as string}</p>
                    <p className="font-montserrat font-semibold text-volcan-black">{t('contact.phoneValue') as string}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-volcan-red/10 rounded-lg">
                    <Mail className="w-5 h-5 text-volcan-red" />
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-gray-500">{t('contact.emailLabel') as string}</p>
                    <p className="font-montserrat font-semibold text-volcan-black">{t('contact.emailValue') as string}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-volcan-red/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-volcan-red" />
                  </div>
                  <div>
                    <p className="font-montserrat text-sm text-gray-500">{t('contact.addressLabel') as string}</p>
                    <p className="font-montserrat font-semibold text-volcan-black">{t('contact.addressValue') as string}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="font-montserrat text-sm text-gray-500 mb-4">{t('footer.followUs') as string}</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-volcan-red hover:text-white hover:border-volcan-red transition-all duration-300 shadow-sm"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
