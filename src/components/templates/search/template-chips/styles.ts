import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => ({
  chipsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },
  chip: {
    borderRadius: '2px',
    cursor: 'pointer',
    padding: '4px 10px 4px 10px',
    '& > p': {
      fontSize: '12px',
    },
  },
}));
