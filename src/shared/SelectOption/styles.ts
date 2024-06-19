import { tss } from '@styles/theme';

const useStyles = tss.create(() => ({
  viewSelect: {
    marginLeft: '8px',
    height: '36px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-icon': {
      top: '50%',
      transform: 'translateY(-50%)',
      right: '8px',
    },
  },
  selectIcon: {
    transition: 'none',
    cursor: 'pointer',
  },
}));

export default useStyles;
