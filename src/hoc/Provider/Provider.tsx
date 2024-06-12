import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'

import { IProvider } from '@utils/interfaces'

import { componentOverrides } from '@styles/componentOverrides'

const Provider: React.FC<IProvider> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={componentOverrides}>{children}</ThemeProvider>
    </StyledEngineProvider>
  )
}

export default Provider
