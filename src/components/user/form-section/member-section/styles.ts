import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    noBorderSection: {
      width: '100%',
      marginBottom: '30px',
    },
    trial: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
    },
    paymentTrial: {
      marginRight: '10px',
    },
    progressImage: {
      width: '200px',
      height: 'auto',
      flexGrow: 1,
    },
    daysLeft: {
      marginLeft: '10px',
      flexShrink: 0,
    },
    section: {
      padding: '24px',
      border: `1px solid ${theme.palette.light.normal}`,
      borderRadius: '4px',
    },
    note: {
      fontSize: '14px',
      paddingTop: '20px',
    },
  };
});
