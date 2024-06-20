import { createTss } from 'tss-react';

function useContext() {
  const theme = {
    palette: {
      primary: {
        main: '#3366FF',
        light: '#0F62FE',
        dark: '#001A54',
        normal: '#096DD9',
        purple: '#8A3FFC',
      },
      white: {
        main: '#FFFFFF',
        light: '#E0E0E0',
      },
      error: {
        main: '#FF4D4F',
      },
      light: {
        main: '#F4F4F4',
        dark: '#A8A8A8',
        grey: '#525252',
        light: '#6F6F6F',
        normalGrey: '#F0F0F0',
        normal: '#E0E0E0',
        lightGrey: '#C6C6C6',
      },
      dark: {
        main: '#161616',
        darkGrey: '#343A40',
      },
      orange: {
        main: '#FF832B',
      },
      green: {
        main: '#24A148',
      },
      blue: {
        lightBlue: '#E6F7FF',
        mediumBlue: '#1890FF',
      },
    },
    typography: {
      fontFamily: {
        primary: 'Open Sans, sans-serif',
        secondary: 'Inter, sans-serif',
      },
      fontWeight: {
        extraLight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900,
      },
    },
    breakpoints: {
      values: {
        xxs: 0,
        xs: 450,
        sm: 600,
        md: 900,
        semiLg: 1100,
        lg: 1200,
        semiXl: 1450,
        xl: 1536,
        xxl: 1900,
      },
    },
  };

  return { theme };
}

export const { tss } = createTss({ useContext });

const style = { styles: 1 };

export const useStyles = tss.create({ style });
