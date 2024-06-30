import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
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
  };
});
