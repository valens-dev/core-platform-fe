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
      borderLeft: '1px solid rgba(9, 109, 217)',
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
  };
});
