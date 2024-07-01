import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    tourPopup: {
      '& .MuiPopover-paper': {
        width: '395px',
        height: '182px',
        backgroundColor: theme.palette.primary.purple,
        color: theme.palette.white.main,
        padding: '20px',
      },
    },
    closeButton: {
      position: 'absolute',
      right: '8px',
      top: '8px',
      color: 'white',
    },
    closeIcon: {
      '& path': {
        fill: theme.palette.white.main,
      },
    },
    popupContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      height: '100%',
    },
    popupTitle: {
      fontSize: '16px',
      fontWeight: theme.typography.fontWeight.medium,
      color: theme.palette.white.main,
    },
    popupText: {
      color: theme.palette.white.main,
      marginTop: '10px',
      fontSize: '14px',
    },
    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      width: '100%',
      marginTop: 'auto',
    },
    popupButton: {
      color: theme.palette.white.main,
      fontSize: '14px',
    },
  };
});
