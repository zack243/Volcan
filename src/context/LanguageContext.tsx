'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'

type Language = 'fr' | 'en'

interface Translations {
  [key: string]: string | Translations
}

const translations = {
  fr: {
    // Navbar
    nav: {
      home: 'Accueil',
      products: 'Produits',
      benefits: 'Avantages',
      uses: 'Utilisations',
      about: 'À propos',
      contact: 'Contact',
      contactBtn: 'Nous contacter',
    },
    // Hero
    hero: {
      title: 'FIABLE. PUISSANTE. DURABLE.',
      subtitle: 'Des piles conçues pour accompagner chaque moment du quotidien.',
      ctaProducts: 'Découvrir nos produits',
      ctaContact: 'Nous contacter',
      badge1: 'Longue durée',
      badge2: 'Puissance constante',
      badge3: 'Usage quotidien',
    },
    // Products
    products: {
      title: 'Nos produits',
      aa: {
        title: 'Pile AA',
        desc: 'La pile polyvalente par excellence pour tous vos appareils quotidiens.',
        uses: 'Télécommandes, jouets, lampes',
      },
      aaa: {
        title: 'Pile AAA',
        desc: 'Format compact pour les appareils plus petits et légers.',
        uses: 'Télécommandes, souris, horloges',
      },
      d: {
        title: 'Pile D',
        desc: 'Puissance maximale pour les appareils gourmands en énergie.',
        uses: 'Lampes torches, radios, jouets',
      },
      v9: {
        title: 'Pile 9V',
        desc: 'Tension élevée pour les appareils professionnels et domestiques.',
        uses: 'Détecteurs de fumée, instruments',
      },
    },
    // Benefits
    benefits: {
      title: 'Pourquoi choisir Volcan ?',
      reliable: {
        title: 'Fiable',
        desc: 'Fonctionnement garanti dès la première utilisation. Une pile qui ne vous laissera jamais tomber.',
      },
      powerful: {
        title: 'Puissante',
        desc: 'Débit énergétique constant pour une performance optimale dans tous vos appareils.',
      },
      durable: {
        title: 'Durable',
        desc: 'Autonomie prolongée pour une utilisation prolongée sans compromis.',
      },
    },
    // Uses
    uses: {
      title: 'Une énergie prête pour toute la maison',
      remote: 'Télécommande',
      flashlight: 'Lampe torche',
      radio: 'Radio',
      toys: 'Jouets',
      controller: 'Manette',
      clock: 'Horloge',
    },
    // About
    about: {
      title: 'À propos de Volcan',
      desc: 'Volcan accompagne les foyers avec des piles fiables, puissantes et durables, pensées pour les besoins du quotidien.',
      stat1: 'Usage quotidien',
      stat2: 'Performance stable',
      stat3: 'Confiance durable',
    },
    // Locations
    locations: {
      title: 'Où trouver Volcan ?',
      desc: 'Disponible chez les revendeurs, boutiques, supermarchés et grossistes.',
      cta: 'Devenir revendeur',
    },
    // Contact
    contact: {
      title: 'Contactez-nous',
      name: 'Nom',
      phone: 'Téléphone',
      email: 'Email',
      message: 'Message',
      submit: 'Envoyer',
      phoneLabel: 'Téléphone',
      emailLabel: 'Email',
      addressLabel: 'Adresse',
      phoneValue: '+243 000 000 000',
      emailValue: 'contact@volcanrdc.com',
      addressValue: 'Kinshasa, RDC',
    },
    // Footer
    footer: {
      slogan: 'Fiable. Puissante. Durable.',
      quickLinks: 'Liens rapides',
      followUs: 'Suivez-nous',
      copyright: '© 2024 VOLCAN. Tous droits réservés.',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      products: 'Products',
      benefits: 'Benefits',
      uses: 'Uses',
      about: 'About',
      contact: 'Contact',
      contactBtn: 'Contact us',
    },
    // Hero
    hero: {
      title: 'RELIABLE. POWERFUL. LONG-LASTING.',
      subtitle: 'Batteries designed to power every moment of everyday life.',
      ctaProducts: 'Discover our products',
      ctaContact: 'Contact us',
      badge1: 'Long lasting',
      badge2: 'Constant power',
      badge3: 'Daily use',
    },
    // Products
    products: {
      title: 'Our products',
      aa: {
        title: 'AA Battery',
        desc: 'The versatile battery of choice for all your everyday devices.',
        uses: 'Remotes, toys, flashlights',
      },
      aaa: {
        title: 'AAA Battery',
        desc: 'Compact size for smaller and lighter devices.',
        uses: 'Remotes, mice, clocks',
      },
      d: {
        title: 'D Battery',
        desc: 'Maximum power for energy-hungry devices.',
        uses: 'Flashlights, radios, toys',
      },
      v9: {
        title: '9V Battery',
        desc: 'High voltage for professional and household devices.',
        uses: 'Smoke detectors, instruments',
      },
    },
    // Benefits
    benefits: {
      title: 'Why choose Volcan?',
      reliable: {
        title: 'Reliable',
        desc: 'Guaranteed performance from the first use. A battery that never lets you down.',
      },
      powerful: {
        title: 'Powerful',
        desc: 'Constant energy flow for optimal performance in all your devices.',
      },
      durable: {
        title: 'Long-lasting',
        desc: 'Extended autonomy for prolonged use without compromise.',
      },
    },
    // Uses
    uses: {
      title: 'Energy ready for the whole home',
      remote: 'Remote control',
      flashlight: 'Flashlight',
      radio: 'Radio',
      toys: 'Toys',
      controller: 'Game controller',
      clock: 'Clock',
    },
    // About
    about: {
      title: 'About Volcan',
      desc: 'Volcan powers homes with reliable, powerful and long-lasting batteries designed for everyday needs.',
      stat1: 'Daily use',
      stat2: 'Stable performance',
      stat3: 'Lasting trust',
    },
    // Locations
    locations: {
      title: 'Where to find Volcan?',
      desc: 'Available at retailers, shops, supermarkets and wholesalers.',
      cta: 'Become a reseller',
    },
    // Contact
    contact: {
      title: 'Contact us',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Address',
      phoneValue: '+243 000 000 000',
      emailValue: 'contact@volcanrdc.com',
      addressValue: 'Kinshasa, DRC',
    },
    // Footer
    footer: {
      slogan: 'Reliable. Powerful. Long-lasting.',
      quickLinks: 'Quick links',
      followUs: 'Follow us',
      copyright: '© 2024 VOLCAN. All rights reserved.',
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr')

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
  }, [])

  const t = useCallback(
    (key: string): string | Translations => {
      const keys = key.split('.')
      let value: string | Translations = translations[language]

      for (const k of keys) {
        if (typeof value === 'object' && value !== null && k in value) {
          value = value[k]
        } else {
          return key
        }
      }

      return value
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
