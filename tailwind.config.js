/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#FF7400',
        'primary-light': '#F9A946',
        'rose-pink': '#FE2C58',
        'rose-pink-light': '#F3AAB1',
        'mint-blue': '#00B2BC',
        'mint-blue-light': '#00C7BD',
        'space-purple': '#7963E1',
        'space-purple-light': '#A9AFEB',
        'coffee-brown': '#A2845E',
        'coffee-brown-light': '#AC8E68',
      },
      fontFamily: {
        sans: ['SF Pro', 'ui-sans-serif', 'system-ui'],
        serif: ['New York', 'ui-serif', 'Georgia'],
        'serif-cn': ['Source Han Serif CN', 'Noto Serif SC', 'serif'],
      },
      borderRadius: {
        'large': '20px',
        'medium': '16px',
        'small': '8px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, var(--primary-color), var(--rose-pink))',
      },
    },
  },
  plugins: [],
}