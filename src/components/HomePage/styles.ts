import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'relative',
  },
  buttonAndArrowsWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  questionPopUp: {
    position: 'fixed',
    bottom: '15px',
    right: '80px',
  },
  arrowsWrapper: {
    display: 'flex',
  },
  arrow: {
    cursor: 'pointer',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexGrow: 1,
  },
  blackArrow: {
    '& path': {
      fill: theme.palette.dark.main,
    },
  },
}));

export default useStyles;
