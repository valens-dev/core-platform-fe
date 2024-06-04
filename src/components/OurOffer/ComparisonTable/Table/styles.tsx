import { tss } from "@styles/theme";

const useStyles = tss.create(({ theme }) => ({
  featureComparisonTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    display: "flex",
    padding: "10px 0",
  },
  tableFeature: {
    flex: "2",
  },
  tableCell: {
    flex: "1",
    textAlign: "center",
  },
  yesIcon: {},
  noIcon: {
    color: theme.palette.error.main,
  },
  emptyFeatureCell: {
    color: theme.palette.dark.main,
    fontWeight: theme.typography.fontWeight.semiBold,
  },
  nonEmptyFeatureCell: {
    fontFamily: "Inter, sans-serif",
    color: theme.palette.dark.darkGrey,
    fontWeight: theme.typography.fontWeight.regular,
  },
}));

export default useStyles;
