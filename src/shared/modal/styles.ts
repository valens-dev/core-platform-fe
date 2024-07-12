import { hexToRgba } from '@/types/parse';

import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    modalWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiBackdrop-root': {
        backgroundColor: hexToRgba(theme.palette.black.main, 0.5),
      },
    },
    titleAndCloseButton: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px 24px 0px 24px',
    },
    closeButton: {
      '& > path': {
        fill: theme.palette.light.light,
      },
    },
  };
});
