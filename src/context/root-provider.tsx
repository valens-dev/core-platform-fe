import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { componentOverrides } from '@/styles/component-overrides';

interface IProviderProps {
  children: React.ReactNode;
}

const RootProvider: React.FC<IProviderProps> = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={componentOverrides}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default RootProvider;
