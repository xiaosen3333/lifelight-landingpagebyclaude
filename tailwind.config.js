/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors from design guide
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

        // Neutral Colors
        'bg-gray': '#F7F7F8',
        'bg-light-blue': '#F2F2F6',
        'divider': '#BFBFBF',
        'dark-gray': '#A2A2A2',
        'text-secondary': '#7F7F7F',
        'text-primary': '#000000',
      },
      fontFamily: {
        // Typography system from design guide
        'sans': ['SF Pro', 'ui-sans-serif', 'system-ui'],
        'serif': ['New York', 'ui-serif', 'Georgia'],
        'serif-cn': ['Source Han Serif CN', 'Noto Serif SC', 'serif'],
      },
      borderRadius: {
        // Rounded corners from design guide
        'large': '20px',
        'medium': '16px',
        'small': '8px',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'button': '0 5px 15px rgba(255, 116, 0, 0.2)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 15px rgba(255, 116, 0, 0.5)',
        'glow-pink': '0 0 15px rgba(254, 44, 88, 0.5)',
        'glow-mint': '0 0 15px rgba(0, 178, 188, 0.5)',
      },
      backgroundImage: {
        // Gradients based on color system
        'gradient-primary': 'linear-gradient(90deg, #FF7400, #F9A946)',
        'gradient-rose': 'linear-gradient(90deg, #FE2C58, #F3AAB1)',
        'gradient-mint': 'linear-gradient(90deg, #00B2BC, #00C7BD)',
        'gradient-purple': 'linear-gradient(90deg, #7963E1, #A9AFEB)',
        'gradient-coffee': 'linear-gradient(90deg, #A2845E, #AC8E68)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 4s ease-in-out infinite',
        'wiggle': 'wiggle 5s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite',
        'pop-in': 'popIn 0.5s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'scale': 'scale 8s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        popIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.8)'
          },
          '70%': {
            transform: 'scale(1.05)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '10px',
        'lg': '16px',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'lg': '0 3px 6px rgba(0, 0, 0, 0.15)',
        'glow': '0 0 10px rgba(255, 116, 0, 0.5)',
      },
      transitionTimingFunction: {
        'bounce-gentle': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      height: {
        'screen-navbar': 'calc(100vh - 80px)',
      },
      zIndex: {
        '-1': '-1',
        '-5': '-5',
        '-10': '-10',
      },
    },
  },
  plugins: [],
}