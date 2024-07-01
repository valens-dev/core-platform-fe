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
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    tableFeature: {
      flexBasis: 0,
      flexGrow: 2,
      paddingLeft: '20px',
    },
    tableCell: {
      flexBasis: 0,
      flexGrow: 1,
      textAlign: 'center',
      padding: '10px',
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
