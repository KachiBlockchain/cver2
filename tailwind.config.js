module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: "'Nunito', sans-serif;",
      body: "'Poppins', sans-serif;",
    },   
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      backgroundImage: {
        nav: "url('/src/assets/img/nav.png')",
        ham: "url('/src/assets/img/Hamburger Menu.png')",
        signbg: "url('/src/assets/img/Signupbg.png')",
        sidebarbg: "url('/src/assets/img/sidebarBg.png')",
        bg: "url('/src/assets/img/bg.png')",
      },
      colors: {
        primary: '#050402',
        secondary: '#1C1D24',
        tertiary: '#131419',
        accent: {
          DEFAULT: '#ac6b34',
          hover: '#925a2b',
        },
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
};
