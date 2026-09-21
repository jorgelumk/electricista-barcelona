import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0F172A',
          dark: '#1E293B',
          yellow: '#F59E0B',
          'yellow-hover': '#D97706',
          amber: '#FFB800',
          blue: '#0284C7',
          green: '#16A34A',
          red: '#DC2626'
        }
      }
    },
  },
  plugins: [],
}
export default config
