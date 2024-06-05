import { tss } from "@styles/theme";

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    height: "100vh",
  },
  box: {
    background: theme.palette.light.main,
    width: "580px",
    minHeight: "480px",
    padding: "32px",
  },
  infoDetails: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "18px",
  },
  openingMessage: {
    display: "flex",
    gap: "6px",
    alignItems: "center",
  },
  text: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  welcomeToText: {
    color: theme.palette.light.grey,
  },
  corePlatformText: {
    color: theme.palette.primary.dark,
    fontWeight: theme.typography.fontWeight.bold,
    fontFamily: theme.typography.fontFamily.primary,
  },
  lightText: {
    color: theme.palette.light.dark,
  },
  tabs: {
    marginTop: "35px",
    display: "flex",
    gap: "32px",
  },
  tab: {
    cursor: "pointer",
  },
  activeTab: {
    borderBottom: `2px solid ${theme.palette.primary.dark}`,
    color: theme.palette.primary.dark,
  },
  line: {
    marginTop: "5px",
    marginBottom: "25px",
  },
}));

export default useStyles;
