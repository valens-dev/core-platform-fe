import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    searchBar: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: '16px',
    },
    searchField: {
      width: '505px',
      height: '36px',
      borderRadius: '4px',
      '& .MuiInputAdornment-root': {
        marginRight: '8px',
      },
    },
    searchIcon: {
      marginRight: '8px',
    },
  };
});
