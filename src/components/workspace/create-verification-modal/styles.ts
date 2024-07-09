import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.white.main,
      width: '572px',
      height: '430px',
      padding: '16px 24px 24px 24px',
      borderRadius: '2px',
      '& .MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.Mui-completed, & .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root':
        {
          width: '32px',
          height: '32px',
        },
      '& .MuiStepConnector-line': {
        marginLeft: '4px',
      },
    },
    titleAndCloseButton: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    closeButton: {
      '& > path': {
        fill: theme.palette.light.light,
      },
    },
    note: {
      color: theme.palette.light.dark,
      width: '472px',
      fontSize: '12px',
    },
    textField: {
      width: '505px',
      height: '39px',
      fontWeight: '400',
    },
    formWrapper: {
      width: '505px',
      marginTop: '20px',
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '15px',
    },
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
      borderLeft: '1px solid rgba(9, 109, 217)',
      height: '50px',
      marginLeft: '24px',
    },
    textItem: {
      flex: '1',
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
      fontSize: '0px',
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
      border: '1px solid rgba(224, 224, 224)',
      color: theme.palette.dark.main,
      backgroundColor: theme.palette.white.main,
      '&:hover': {
        backgroundColor: theme.palette.light.main,
      },
    },
  };
});
