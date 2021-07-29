module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // primary
        'dark-blue': 'hsl(233, 26%, 24%)',
        'lime-green': 'hsl(136, 65%, 51%)',
        'bright-cyan': 'hsl(192, 70%, 51%)',
        // neutral
        'grayish-blue': 'hsl(233, 8%, 62%)',
        'light-grayish-blue': 'hsl(220, 16%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontSize: {
        'article-heading': ['1rem', '1.25rem'],
        'article-text': ['0.795rem', '1.15rem'],
        'very-xs': ['0.65rem', '0.85rem'],
        xs: ['0.875rem', '1.25rem'],
        sm: ['0.9375rem', '1.55rem'],
        h1: ['2.5rem', '3.25rem'],
        'lg-h1': ['2.75rem', '3.5rem'],
        h2: ['2rem', '2.35rem'],
      },
      maxWidth: {
        'screen-lg': '72.375rem',
      },
    },
    fontFamily: {
      sans: ['"Public Sans"', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
