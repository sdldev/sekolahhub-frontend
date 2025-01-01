/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--accent) / <alpha-value>)',
        'primary-light': 'rgb(var(--accent-light) / <alpha-value>)',
        'primary-dark': 'rgb(var(--accent-dark) / <alpha-value>)'
      }
    },
  },
  plugins: [],
}