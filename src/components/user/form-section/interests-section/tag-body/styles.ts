import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    tagBody: {
      width: 'auto',
      height: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      padding: '24px 0px 24px 0px',
    },
  };
});
