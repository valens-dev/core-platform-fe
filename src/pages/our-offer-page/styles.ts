import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      textAlign: 'center',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: '38px',
      fontWeight: theme.typography.fontWeight.medium,
    },
    titlePosition: {
      marginBottom: '20px',
      marginTop: '30px',
    },
    toggleButtonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      border: `1px solid ${theme.palette.light.normal}`,
      width: '179px',
      height: '44px',
      justifyItems: 'center',
      justifySelf: 'center',
      margin: '0 auto',
      borderRadius: '25px',
      padding: '5px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    toggleButton: {
      padding: '10px 20px',
      borderRadius: '20px',
      margin: '0 5px',
      color: theme.palette.light.grey,
      border: 'none',
      '&.active': {
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.white.main,
      },
    },
    plans: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '30px',
      width: '100%',
    },
  };
});
