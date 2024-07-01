import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      background: theme.palette.white.main,
      width: '572px',
      height: '525px',
      padding: '16px 24px 24px 24px',
      borderRadius: '2px',
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
  };
});
