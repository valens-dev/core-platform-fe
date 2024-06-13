import { tss } from '@styles/theme';

const useStyles = tss.create(() => ({
  wrapper: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    position: 'relative',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  questionPopUp: {
    position: 'fixed',
    bottom: '15px',
    right: '80px',
  },
}));

export default useStyles;
