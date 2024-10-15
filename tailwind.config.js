/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1440px) { ... }
    },

    fontFamily: {
      Figtree: ['Figtree', 'serif'],
      Figtree_italic: ['Figtree-italic', 'serif'],
      Figtree_SemiBold: ['Figtree-SemiBold', 'serif'],
      Figtree_ExtraBold: ['Figtree-ExtraBold', 'serif'],
    },

    colors: {
      'blog-white': 'hsl(0,0%,100%)',
      'blog-grey': 'hsl(0,0%,50%)',
      'blog-black': 'hsl(0,0%,7%)',
      'blog-yellow': 'hsl(47,88%,63%)'
    },
    extend: {},
  },
  plugins: [],
}

