import { createTss } from 'tss-react'
import { Breakpoints, Palette, Typography } from '@utils/interfaces'

export interface Theme {
  palette: Palette
  typography: Typography
  breakpoints: Breakpoints
}

function useContext() {
  const theme = {
    palette: {
      primary: {
        main: '#3366FF',
        dark: '#001A54',
      },
      white: {
        main: '#FFFFFF',
      },
      error: {
        main: '#FF4D4F',
      },
      light: {
        main: '#F4F4F4',
        dark: '#A8A8A8',
        grey: '#525252',
      },
      dark: {
        main: '#161616',
      },
    },
    typography: {
      fontFamily: 'Open Sans, sans-serif',
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
      body1: {
        fontWeight: 300,
        fontSize: '16px',
        lineHeight: '22px',
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
  }

  return { theme }
}

export const { tss } = createTss({ useContext })

export const useStyles = tss.create({})
