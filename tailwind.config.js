/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: {
          300: '#FFA86A',
          400: '#FF8A3D',
          500: '#FF6A1A',
        },
        ink: {
          50:  '#F4F5F8',
          100: '#E6E8EE',
          200: '#B8BFCC',
          300: '#7A8396',
          400: '#4A5162',
          500: '#353B49',
          600: '#262B36',
          700: '#1B1F28',
          800: '#13161D',
          900: '#0C0E13',
          950: '#07080B',
        },
        whatsapp: { DEFAULT: '#25D366', dark: '#128C7E' },
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Geist"', 'system-ui', 'sans-serif'],
        body:    ['"Geist"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'pulse-dot':  'pulseDot 1.8s infinite',
        'pulse-ring': 'ringPulse 1.8s infinite',
        'pulse-o':    'pulseO 1.6s infinite',
        'marquee':    'marquee 28s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%':   { boxShadow: '0 0 0 0 rgba(37,211,102,.55)' },
          '70%':  { boxShadow: '0 0 0 10px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
        ringPulse: {
          '0%':   { transform: 'scale(.8)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        },
        pulseO: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '.4' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
