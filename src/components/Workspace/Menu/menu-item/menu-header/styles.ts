import { tss } from '@/styles/theme';

const useStyles = tss.create({
  menuHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
});

export default useStyles;
