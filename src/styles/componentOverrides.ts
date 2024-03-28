import { createTheme } from '@mui/material/styles'

export const componentOverrides = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          border: '0.4px solid #A8A8A8',
          color: '#161616',
          background: '#FFFFFF',
        },
      },
    },
  },
})
