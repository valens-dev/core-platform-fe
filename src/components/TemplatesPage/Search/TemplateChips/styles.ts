import { tss } from '@styles/theme';

const useStyles = tss.create(() => ({
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

export const getChipStyle = (background: string, color: string) => ({
  background,
  '& > span': { color },
  border: `1px solid ${color}`,
});

export default useStyles;
