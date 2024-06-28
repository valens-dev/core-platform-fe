import { tss } from '@/styles/theme';

const useStyles = tss.create({
  leftSide: {
    flex: 1,
    backgroundColor: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflowY: 'auto',
  },
});

export default useStyles;
