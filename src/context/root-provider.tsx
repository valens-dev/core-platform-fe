import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { componentOverrides } from '@/styles/component-overrides';

interface IProviderProps {
  children: React.ReactNode;
}

export function RootProvider({ children }: IProviderProps): JSX.Element {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={componentOverrides}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
