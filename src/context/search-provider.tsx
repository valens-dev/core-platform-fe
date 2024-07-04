import { useState, useContext, createContext } from 'react';

interface IProviderProps {
  children: React.ReactNode;
}

interface ISearchContext {
  searchField: string;
  setSearchField: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<ISearchContext | undefined>(undefined);

export function SearchProvider({
  children,
}: IProviderProps): React.ReactElement {
  const [searchField, setSearchField] = useState<string>('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ searchField, setSearchField }}>
      {children}
    </SearchContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSearch(): ISearchContext {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
