import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
  menuBox: {
    position: 'absolute',
    backgroundColor: theme.palette.white.main,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    width: '160px',
    zIndex: 1,
  },
  menuItem: {
    '&:hover': {
      backgroundColor: theme.palette.blue.lightBlue,
      color: theme.palette.blue.mediumBlue,
    },
    '&.Mui-selected': {
      backgroundColor: theme.palette.blue.lightBlue,
      color: theme.palette.blue.mediumBlue,
    },
  },
}));

export default useStyles;
