import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    tabs: {
      flexGrow: 1,
      marginLeft: '30px',
    },
    tab: {
      textTransform: 'none',
      fontSize: '14px',
    },
  };
});
