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
      width: '160px',
      height: '40px',
      fontSize: '14px',
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: theme.palette.blue.lightBlue,
        color: theme.palette.blue.mediumBlue,
      },
      '&.Mui-selected': {
        backgroundColor: theme.palette.blue.lightBlue,
        color: theme.palette.blue.mediumBlue,
      },
      '&:last-child': {
        marginBottom: '0',
      },
    },
  };
});
