import { tss } from '@/styles/theme';

const useStyles = tss.create({
  wrapper: {
    width: '100%',
  },
  content: {
    display: 'flex',
    height: 'calc(100% - 50px)',
  },
});

export default useStyles;
