import { tss } from "@styles/theme";

const useStyles = tss.create(({ theme }) => ({
  plan: {
    border: `1px solid ${theme.palette.white.light}`,
    borderRadius: "10px",
    padding: "20px",
    width: "348px",
    height: "663px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  starter: {
    borderTop: `8px solid ${theme.palette.orange.main}`,
    paddingTop: "50px",
  },
  premium: {
    borderTop: `8px solid ${theme.palette.primary.normal}`,
  },
  enterprise: {
    borderTop: `8px solid ${theme.palette.green.main}`,
    paddingTop: "50px",
  },
  planTitle: {
    marginTop: "10px",
    marginBottom: "10px",
    fontSize: "38px",
    color: theme.palette.dark.main,
    fontWeight: theme.typography.fontWeight.semiBold,
    lineHeight: "46px",
  },
  description: {
    margin: "10px 0",
    fontSize: "12px",
    color: theme.palette.light.dark,
  },
  price: {
    fontSize: "24px",
    margin: "10px 0",
    "& span": {
      "&.amount": {
        color: theme.palette.primary.dark,
        fontSize: "50px",
      },
      "&.period": {
        color: theme.palette.light.dark,
      },
    },
  },
  mostPopular: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 10px",
    transform: "translateX(-30%)",
    fontSize: "12px",
    color: theme.palette.primary.normal,
  },
  starIcon: {
    marginRight: "5px",
  },
  featureList: {
    borderTop: `1px solid ${theme.palette.light.lightGrey}`,
    listStyle: "none",
    padding: "0",
    margin: "20px 0",
    flex: "1",
    "& li": {
      display: "flex",
      alignItems: "center",
      margin: "10px 0",
    },
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  titleFeature: {
    fontFamily: "Inter, sans-serif",
    fontWeight: theme.typography.fontWeight.semiBold,
    lineHeight: "20px",
    fontSize: "16px",
    color: theme.palette.primary.dark,
  },
  textFeature: {
    fontFamily: "Inter, sans-serif",
    fontWeight: theme.typography.fontWeight.regular,
    fontSize: "16px",
  },
  vectorIcon: {
    marginRight: "8px",
    width: "16px",
    height: "16px",
  },
  ctaButton: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.white.main,
    padding: "10px 20px",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    position: "absolute",
    bottom: "-40px",
    left: "50%",
    transform: "translateX(-50%)",
  },
  btnPosition: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
}));

export default useStyles;
