import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        apple: {
          gray: '#f5f5f7',
          darkgray: '#1d1d1f',
          blue: '#0071e3',
          lightblue: '#2997ff',
          border: '#d2d2d7',
          text: '#6e6e73',
        }
      }
    },
  },
  plugins: [],
}

export default config
