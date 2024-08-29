/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"


  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1',

      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('flowbite/plugin')

    // ...
  ]
}

