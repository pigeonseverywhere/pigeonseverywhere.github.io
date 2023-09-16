/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        sourcesans: ["Source\\ Sans\\ 3"]
      },
      colors: {
        text: "rgb(var(--color-text) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity:'0', transform:'translateY(-20%)'},
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-short': 'bounce 1s ease-in-out',
        'fade': 'fadeInDown 0.3s ease-in'
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xs': {'max': '400px'},

      'tall': { 'raw': '(min-height: 800px)' },
      // => @media (max-height: 800px) { ... }
    },
    fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        serif: ["Times New Roman", 'Times', 'serif']
      },

  },

  darkMode: 'class',

  plugins: [],
};

module.exports = config;
