import { ReactNode } from 'react'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: 'red',
        },
      },
    },
  },
})

interface IProvider {
  children?: ReactNode
}

const Provider: React.FC<IProvider> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Provider
