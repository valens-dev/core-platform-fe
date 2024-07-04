import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import { componentOverrides } from '@/styles/component-overrides';

import { SearchProvider } from './search-provider';

interface IProviderProps {
  children: React.ReactNode;
}

export function RootProvider({ children }: IProviderProps): React.ReactNode {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={componentOverrides}>
        <SearchProvider>{children}</SearchProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
