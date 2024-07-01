import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      padding: '65px 50px 120px 65px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '24px',
    },
    noteWrapper: {
      width: '70%',
    },
    note: {
      color: theme.palette.light.grey,
    },
    aboutUsText: {
      fontSize: '20px',
      lineHeight: '30px',
      marginTop: '30px',
    },
  };
});
