import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      200: '#f77070',
    },
    grey: {
      100: '#eff3fa',
    },
    blue: {
      100: '#0998ae',
    },
    red: {
      100: '#ff3d3d',
      200: '#f77070',
    },
  },
  fonts: {
    body: 'Graphik Font',
    heading: 'Graphik Font',
  },
  fontWeight: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fontSize: {
    base: '24px',
    md: '40px',
    lg: '56px',
  },
  height: {
    base: '100%', // 0-48em
    md: '50%', // 48em-80em,
    xl: '25%', // 80em+
  },
  width: {[
    '100%', // 0-30em
    '50%', // 30em-48em
    '25%', // 48em-62em
    '15%', // 62em+
  ]}
});

export default customTheme;
