import { tss } from "@styles/theme";

const useStyles = tss.create(({ theme }) => ({
  featureComparisonTable: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableRow: {
    display: "flex",
    padding: "10px 0",
    justifyContent: "space-between", // Ensure cells are spaced evenly
    alignItems: "center", // Ensure vertical alignment
  },
  tableFeature: {
    flexBasis: 0,
    flexGrow: 2, // Ensure feature name cell is wider
    paddingLeft: "20px", // Add padding to the left for alignment
  },
  tableCell: {
    flexBasis: 0,
    flexGrow: 1,
    textAlign: "center", // Ensure text is centered in each cell
    padding: "10px", // Add padding for better spacing
  },
  emptyFeatureCell: {
    color: theme.palette.dark.main,
    fontWeight: theme.typography.fontWeight.semiBold,
  },
  nonEmptyFeatureCell: {
    color: theme.palette.dark.darkGrey,
    fontWeight: theme.typography.fontWeight.regular,
  },
}));

export default useStyles;
