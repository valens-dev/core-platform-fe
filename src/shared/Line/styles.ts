import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => ({
  line: {
    background: theme.palette.light.dark,
    height: '0.5px',
    width: '100%',
  },
}));
