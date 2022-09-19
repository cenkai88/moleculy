/** @type {import('tailwindcss').Config} */
module.exports = {
  jit: true,
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  prefix: 'ml-'
}
