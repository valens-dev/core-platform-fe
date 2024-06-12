import { tss } from "@styles/theme";

const useStyles = tss.create(({ theme }) => ({
  cardsWrapper: {
    display: "flex",
    gap: "16px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    width: "276px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardImage: {
    width: "100%",
    height: "auto",
    borderBottom: `1px solid ${theme.palette.light.lightGrey}`,
  },
  cardTitle: {
    color: theme.palette.dark.main,
    fontSize: "16px",
  },
  cardCreation: {
    color: theme.palette.light.dark,
    fontSize: "14px",
  },
}));

export default useStyles;
