import { createTheme } from '@mui/material/styles'

export const componentOverrides = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
        },
        outlined: {
          border: '0.4px solid #A8A8A8',
          color: '#161616',
          background: '#FFFFFF',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          border: '1px solid #C6C6C6',
          background: '#FFFFFF',
          color: '#6F6F6F',
          padding: '6px 12px 6px 12px',
          boxShadow: '0px 10px 20px 0px #3040780F',
          width: 'min-content',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#161616',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Open Sans, sans-serif',
        },
      },
    },
  },
})
