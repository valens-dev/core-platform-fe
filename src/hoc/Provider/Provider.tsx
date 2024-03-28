import { ReactNode } from 'react'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { componentOverrides } from '../../styles/componentOverrides'

interface IProvider {
  children?: ReactNode
}

const Provider: React.FC<IProvider> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={componentOverrides}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Provider
