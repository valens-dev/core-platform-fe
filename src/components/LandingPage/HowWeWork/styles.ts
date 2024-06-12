import { tss } from "@styles/theme";

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "65px 0 40px 65px",
    width: "100%",
  },
  leftSide: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightSide: {
    width: "50%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    gap: "20px",
    paddingLeft: "120px",
  },
  cards: {
    marginTop: "50px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  generalCardStyle: {
    padding: "20px",
    cursor: "pointer",
    borderRadius: "20px",
  },
  card: {
    border: `1px solid white`,
    "&:hover": {
      border: `1px solid ${theme.palette.primary.normal}`,
      "& > div > svg > path": {
        fill: theme.palette.primary.normal,
      },
    },
  },
  activeCard: {
    border: `1px solid ${theme.palette.primary.normal}`,
    "& > div > svg > path": {
      fill: theme.palette.primary.normal,
    },
    "& > p": {
      WebkitLineClamp: 3,
    },
  },
  cardHeader: {
    display: "flex",
    gap: "10px",
  },
  description: {
    color: theme.palette.light.grey,
    marginTop: "5px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },
  note: {
    color: theme.palette.light.grey,
  },
  bookADemoBtn: {
    width: "140px",
    height: "55px",
    "& > p": {
      fontWeight: theme.typography.fontWeight.bold,
    },
  },
  image: {
    marginTop: "70px",
    width: "576px",
    height: "524px",
    borderRadius: "12px",
  },
  imagePosition: {
    marginLeft: "-70px",
  },
}));

export default useStyles;
