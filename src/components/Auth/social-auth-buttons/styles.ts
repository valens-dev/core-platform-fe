import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    wrapper: {
      marginTop: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    lines: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      '& > div': {
        width: '46.5%',
      },
    },
    lightText: {
      fontSize: '12px',
      color: theme.palette.light.dark,
    },
    btn: {
      height: '48px',
      border: `1px solid ${theme.palette.light.main}`,
      background: theme.palette.white.main,
      '& > p': {
        color: theme.palette.dark.main,
      },
      '&:hover': {
        background: 'none',
      },
    },
  };
});
