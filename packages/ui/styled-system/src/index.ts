const plugin = require('tailwindcss/plugin');
export default plugin(({ addUtilities }: any) => {
  addUtilities(
    {
      '.lavender': {
        'background': '#b67edc',
      },
      '.tinsfox': {
        'color': '#4fdc51',
      },
    },
    {},
  );
});
