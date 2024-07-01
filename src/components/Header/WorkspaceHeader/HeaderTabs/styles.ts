import { tss } from '@styles/theme';

const useStyles = tss.create(() => ({
  tabs: {
    flexGrow: 1,
    marginLeft: '30px',
  },
  tab: {
    textTransform: 'none',
    fontSize: '14px',
  },
}));

export default useStyles;
