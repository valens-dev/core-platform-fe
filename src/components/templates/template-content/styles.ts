import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    contentWrapper: {
      display: 'flex',
      gap: '20px',
    },
    navigation: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      borderRight: `1px solid ${theme.palette.light.main}`,
      width: '256px',
      height: '232px',
    },
  };
});
