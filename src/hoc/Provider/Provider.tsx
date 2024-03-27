import { ReactNode } from 'react'
import { StyledEngineProvider } from '@mui/material/styles'

interface IProvider {
  children?: ReactNode
}

const Provider: React.FC<IProvider> = ({ children }) => {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>
}

export default Provider
