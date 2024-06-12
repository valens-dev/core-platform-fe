import { tss } from '@styles/theme';

const useStyles = tss.create(() => ({
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
  viewSelect: {
    marginLeft: '8px',
    height: '36px',
    borderRadius: '4px',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  selectIcon: {
    top: 'calc(50% - 6px)',
  },
  iconWrapper: {
    display: 'flex',
    gap: '8px',
    marginLeft: 'auto',
  },
}));

export default useStyles;
