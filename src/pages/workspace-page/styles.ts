import { tss } from '@/styles/theme';

export const useStyles = tss.create({
  wrapper: {
    width: '100%',
  },
  content: {
    display: 'flex',
    height: 'calc(100% - 50px)',
  },
});
