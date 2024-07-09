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
      fontWeight: theme.typography.fontWeight.regular,
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
  };
});
