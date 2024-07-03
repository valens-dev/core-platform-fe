import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    cardStatus: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: theme.palette.light.dark,
    },
    cardStatusText: {
      marginLeft: '8px',
      fontSize: '14px',
      color: theme.palette.dark.main,
    },
    cardVerification: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: theme.palette.light.dark,
    },
    cardVerificationText: {
      marginLeft: '8px',
      fontSize: '14px',
      color: theme.palette.dark.main,
    },
  };
});
