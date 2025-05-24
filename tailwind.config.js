const defaultTheme = require('tailwindcss/defaultTheme')


export default {
  theme: {
    extend: {
      fontFamily: {
        helvetica: ['var(--font-helvetica)', ...fontFamily.sans],
      },
    },
  },
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
