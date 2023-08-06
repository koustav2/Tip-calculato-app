/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': "hsl(172, 67%, 45%)",
      'Verydarkcyan': 'hsl(183, 100%, 15%)',
      'Grayishcyan': 'hsl(184, 14%, 56%)',
      'Lightgrayishcyan:': 'hsl(185, 41%, 84%)',
      'Verylightgrayishcyan': 'hsl(189, 41%, 97%)'
    },
    screens: {
      'mobile': '375px',
      'desktop': '1440px'
    }
  },
  plugins: [],
}

// - Very dark cyan: hsl(183, 100%, 15%)
// - Dark grayish cyan: hsl(186, 14%, 43%)
// - Grayish cyan: hsl(184, 14%, 56%)
// - Light grayish cyan: hsl(185, 41%, 84%)
// - Very light grayish cyan: hsl(189, 41%, 97%)
// - White: hsl(0, 0%, 100%)