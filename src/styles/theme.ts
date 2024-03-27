import { createTss } from 'tss-react'
import { Palette } from './config/palette'
import { Typography } from './config/typography'

export interface Theme {
  palette: Palette
  typography: Typography
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
  }

  return { theme }
}

export const { tss } = createTss({ useContext })

export const useStyles = tss.create({})
