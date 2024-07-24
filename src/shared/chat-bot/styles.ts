import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    chatBotWrapper: {
      width: 'auto',
      height: 'auto',
      '& .rcb-chat-header-container': {
        background: `${theme.palette.white.main} !important`,
      },
      '& .rcb-bot-message': {
        backgroundColor: `${theme.palette.light.main} !important`,
        color: `${theme.palette.dark.main} !important`,
      },
      '& .MuiTypography-root': {
        color: theme.palette.black.secondaryBlack,
        marginTop: '6px',
        fontSize: '14px',
        fontWeight: theme.typography.fontWeight.bold,
      },
      '& .rcb-close-chat-icon': {
        marginTop: '4px',
      },
      '& .rcb-close-chat-icon::after': {
        display: 'none',
      },
    },
  };
});
