import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    line: {
      background: theme.palette.light.dark,
      height: '0.5px',
      width: '100%',
    },
  };
});
