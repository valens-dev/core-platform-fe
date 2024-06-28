import { tss } from '@/styles/theme';

const useStyles = tss.create(() => ({
  templateGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    flexGrow: 1,
  },
}));

export default useStyles;
