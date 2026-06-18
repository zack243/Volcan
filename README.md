# VOLCAN - Site Web Officiel

[![Deploy Status](https://github.com/zack243/Volcan/actions/workflows/deploy.yml/badge.svg)](https://github.com/zack243/Volcan/actions)

Site web one-page pour la marque VOLCAN - Piles et batteries grand public.

## 🌐 URL de production

**Netlify** : https://volcan-batteries.netlify.app (suggéré)

## 🚀 Technologies

- **Framework** : Next.js 15
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Fonts** : Montserrat, Poppins, Bebas Neue (Google Fonts)

## 📁 Structure du projet

```
Volcan/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Layout principal
│   │   ├── page.tsx         # Page d'accueil
│   │   └── globals.css      # Styles globaux Tailwind
│   ├── components/          # Composants React
│   │   ├── Navbar.tsx       # Navigation sticky
│   │   ├── Hero.tsx         # Section héro
│   │   ├── Products.tsx     # 4 produits (AA, AAA, D, 9V)
│   │   ├── Benefits.tsx     # 3 avantages
│   │   ├── Uses.tsx         # 6 utilisations
│   │   ├── About.tsx        # À propos
│   │   ├── Locations.tsx    # Points de vente
│   │   ├── Contact.tsx      # Formulaire + infos
│   │   └── Footer.tsx       # Pied de page
│   └── context/
│       └── LanguageContext.tsx  # Système de traduction FR/EN
├── public/images/           # Images du site
├── dist/                    # Build de production
└── .github/workflows/       # CI/CD GitHub Actions
```

## 🎨 Palette de couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Rouge Volcan | `#D61111` | Primaire, accents, CTA |
| Noir Profond | `#050505` | Fond principal |
| Gris Foncé | `#151515` | Sections alternées |
| Blanc | `#FFFFFF` | Texte principal |
| Bleu Électrique | `#C8FFFF` | Accents secondaires, glows |

## 🌍 Bilingue FR/EN

Le site est entièrement traduit en français et anglais :
- Switcher de langue dans la navbar
- Traductions centralisées dans `src/context/LanguageContext.tsx`
- Tous les textes du site sont traduisibles

## 📸 Images

Les images sont dans `public/images/` :
- `hero-battery.png` - Image principale hero
- `product-aa.png`, `product-aaa.png`, `product-d.png`, `product-9v.png` - Produits
- `flashlight.png`, `remote.png`, `radio.png`, `toys.png`, `controller.png`, `clock.png` - Utilisations
- `family.png` - Image lifestyle

**Note** : Les images actuelles sont des placeholders SVG. Remplacez-les par de vraies photos.

## 🛠️ Développement local

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build de production
npm run build
```

## 🚀 Déploiement

### Option 1 : Netlify (recommandé)

1. Connectez votre repo GitHub à Netlify
2. Configurez :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Le déploiement automatique se fera à chaque push sur `main`

### Option 2 : Vercel

```bash
npx vercel --prod
```

### Option 3 : Déploiement manuel

```bash
npm run build
# Uploadez le dossier dist/ sur votre hébergeur
```

## 📝 Personnalisation

### Modifier les textes

Éditez `src/context/LanguageContext.tsx` :
- Section `fr` pour le français
- Section `en` pour l'anglais

### Modifier les couleurs

Éditez `tailwind.config.js` :
```javascript
colors: {
  volcan: {
    red: '#D61111',      // Votre nouvelle couleur
    black: '#050505',
    // ...
  }
}
```

### Remplacer les images

1. Ajoutez vos images dans `public/images/`
2. Utilisez les mêmes noms de fichiers
3. Rebuild : `npm run build`

### Modifier les infos de contact

Dans `src/context/LanguageContext.tsx` :
```javascript
contact: {
  phoneValue: '+243 XXX XXX XXX',
  emailValue: 'contact@volcanrdc.com',
  addressValue: 'Kinshasa, RDC'
}
```

## ⚙️ Configuration CI/CD

Le fichier `.github/workflows/deploy.yml` configure le déploiement automatique.

**Secrets requis** (dans Settings > Secrets du repo) :
- `NETLIFY_SITE_ID` : ID de votre site Netlify
- `NETLIFY_AUTH_TOKEN` : Token d'authentification Netlify

## 📱 Responsive

Le site est optimisé pour :
- 📱 Mobile (< 640px)
- 📱 Tablette (640px - 1024px)
- 💻 Desktop (> 1024px)

## ✨ Fonctionnalités

- ✅ Navigation sticky avec blur effect
- ✅ Hero section avec animations
- ✅ 4 produits présentés (AA, AAA, D, 9V)
- ✅ 3 avantages (Fiable, Puissante, Durable)
- ✅ 6 utilisations quotidiennes
- ✅ Section À propos avec stats
- ✅ Points de vente
- ✅ Formulaire de contact fonctionnel
- ✅ Footer avec réseaux sociaux
- ✅ Scroll smooth
- ✅ Animations Framer Motion
- ✅ Bilingue FR/EN

## 📧 Contact

Pour toute question ou suggestion :
- Email : contact@volcanrdc.com
- Téléphone : +243 000 000 000

---

**© 2024 VOLCAN - Tous droits réservés**
