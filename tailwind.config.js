/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-2xl': "40px",
        'custom-3xl': "54px",
      },
      colors: {
        'orange': "#FF5501",
        'dark-orange': "#B1106F",
        'blue': "#CFEEFF",
        'dark-blue': "#01A4FFBD",
        'deep-blue': "#002b43",
        'z-black': "#1e1e1e",
        'light-yellow': "#FFF3ED",
      },
      boxShadow: {
        'custom-xl': "0px 1px 30px 0px #0000001A",
      },
      backgroundImage: {
        'our-partners': "url('./assets/images/png/ourpartners.png')",
        'strake': "url('./assets/images/png/strake-bg.png')",
      },
      fontFamily: {
        'inter': "'inter' ,sans serif",
        'lato': "'lato' ,sans serif",
      }
    },
  },
  plugins: [],
}
