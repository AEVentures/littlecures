/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        // Primary brand palette — trust + healing + hope
        ink: {
          50: '#f5f5fb',
          100: '#e6e6f2',
          200: '#c8c9e0',
          300: '#9899c1',
          400: '#5f60a1',
          500: '#3d3f85',
          600: '#2b2d6a',
          700: '#232557',
          800: '#1e1b4b',
          900: '#141232',
        },
        heal: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344',
        },
        life: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        hope: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        human: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        cream: '#fefbf6',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #0891b2 0%, #10b981 45%, #f59e0b 100%)',
        'brand-gradient-warm':
          'linear-gradient(135deg, #f59e0b 0%, #fb7185 50%, #8b5cf6 100%)',
        'brand-gradient-deep':
          'linear-gradient(135deg, #1e1b4b 0%, #164e63 50%, #065f46 100%)',
      },
      boxShadow: {
        'brand-glow': '0 20px 60px -20px rgba(8, 145, 178, 0.35)',
        'warm-glow': '0 20px 60px -20px rgba(245, 158, 11, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slow-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'slow-pulse': 'slow-pulse 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
