import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => ({
  templateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    flexGrow: 1,
  },
}));
