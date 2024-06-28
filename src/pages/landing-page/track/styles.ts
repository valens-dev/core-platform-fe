import { tss } from '@/styles/theme';

const useStyles = tss.create(() => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    width: '100%',
  },
  marqueeBox: {
    height: '80px',
  },
  marqueeContent: {
    display: 'grid',
    overflow: 'hidden',
  },
  marqueeItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
  },
}));

export default useStyles;
