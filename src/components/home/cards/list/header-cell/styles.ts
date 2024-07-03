import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    headerRow: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      alignItems: 'center',
      padding: '16px',
    },
    headerCellName: {
      color: theme.palette.light.grey,
      fontSize: '14px',
      textAlign: 'left',
    },
    headerCellCreated: {
      color: theme.palette.light.grey,
      fontSize: '14px',
      textAlign: 'center',
    },
    headerCellStatus: {
      color: theme.palette.light.grey,
      fontSize: '14px',
      textAlign: 'center',
    },
    headerCellVerification: {
      color: theme.palette.light.grey,
      fontSize: '14px',
      textAlign: 'center',
    },
  };
});
