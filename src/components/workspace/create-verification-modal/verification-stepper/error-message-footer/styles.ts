import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    footer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '520px',
      height: '90px',
      gap: '5px',
    },
    errorAccountMessages: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: '10px',
      marginBottom: '20px',
      width: '400px',
      height: '50px',
    },
    browseText: {
      fontSize: '14px',
      color: theme.palette.primary.light,
      cursor: 'pointer',
    },
    unlockAccountMessagesWrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    unlockAccountMessageItem: {
      display: 'flex',
      gap: '15px',
      fontSize: '14px',
      '& > svg': {
        width: '14px',
        height: '14px',
        marginTop: '3px',
      },
    },
    goBackButton: {
      width: '120px',
      height: '35px',
      border: `1px solid ${theme.palette.light.normal}`,
      color: theme.palette.dark.main,
      backgroundColor: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.light.main,
      },
    },
  };
});
