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
        marginTop: '5px',
        fontSize: theme.typography.fontSize.medium,
        fontWeight: theme.typography.fontWeight.bold,
      },
      '& .rcb-close-chat-icon': {
        margin: '4px',
        width: '21px',
        height: '21px',
      },
      '& .rcb-close-chat-icon::after': {
        display: 'none',
      },
    },
  };
});
