import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'candy-pink': '#FF6B9D',
        'candy-blue': '#4ECDC4',
        'candy-yellow': '#FFE66D',
        'candy-purple': '#A8E6CF',
      },
      fontFamily: {
        'playful': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config