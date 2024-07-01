import { tss } from '@styles/theme';

const useStyles = tss.create(() => ({
  modalWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& .MuiBackdrop-root': {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
  },
}));

export default useStyles;
