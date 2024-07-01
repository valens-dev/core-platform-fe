import { tss } from '@/styles/theme';

export const useStyles = tss.create(() => {
  return {
    modalWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiBackdrop-root': {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      },
    },
  };
});
