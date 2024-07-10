import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    button: {
      marginTop: '15px',
      height: '39px',
      width: '505px',
    },
    modalBody: {
      display: 'flex',
      flexDirection: 'column',
    },
    modalItem: {
      display: 'flex',
      alignItems: 'center',
    },
    verticalLine: {
      borderLeft: `1px solid ${theme.palette.primary.normal}`,
      height: '50px',
      marginLeft: '24px',
    },
    textItem: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      paddingLeft: '10px',
      marginTop: '20px',
    },
    textItemTitle: {
      fontSize: '16px',
    },
    textItemDescription: {
      fontSize: '14px',
      color: theme.palette.light.dark,
    },
    hideText: {
      display: 'none',
    },
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
    applyButton: {
      width: '120px',
      height: '35px',
      backgroundColor: theme.palette.primary.normal,
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
