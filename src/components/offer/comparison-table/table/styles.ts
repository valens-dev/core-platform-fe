import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    featureComparisonTable: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableRow: {
      display: 'flex',
      padding: '10px 0',
    },
    tableFeature: {
      flexBasis: 0,
      flexGrow: 2,
    },
    tableCell: {
      flexBasis: 0,
      flexGrow: 1,
      textAlign: 'center',
    },
    emptyFeatureCell: {
      color: theme.palette.dark.main,
      fontWeight: theme.typography.fontWeight.semiBold,
    },
    nonEmptyFeatureCell: {
      color: theme.palette.dark.darkGrey,
      fontWeight: theme.typography.fontWeight.regular,
    },
  };
});
