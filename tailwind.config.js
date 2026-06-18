/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        volcan: {
          red: '#D61111',
          redDark: '#A80D0D',
          black: '#050505',
          blackLight: '#151515',
          white: '#FFFFFF',
          electric: '#C8FFFF',
          gray: '#1A1A1A',
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        bebas: ['Bebas Neue', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'volcan-gradient': 'linear-gradient(135deg, #D61111 0%, #A80D0D 50%, #050505 100%)',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #D61111, 0 0 10px #D61111, 0 0 15px #D61111' },
          '100%': { boxShadow: '0 0 10px #D61111, 0 0 20px #D61111, 0 0 30px #D61111' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
