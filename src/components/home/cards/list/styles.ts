import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    listWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '100%',
    },
  };
});
