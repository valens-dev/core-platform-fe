import { tss } from '@/styles/theme';

export const useStyles = tss.create(({ theme }) => {
  return {
    registrationForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    textField: {
      marginTop: '5px',
      background: theme.palette.white.main,
    },
    section: {
      display: 'flex',
      alignItems: 'center',
    },
    formControlLabel: {
      width: '50%',
      '& .MuiTypography-body1': {
        color: theme.palette.light.dark,
        fontSize: '14px',
      },
    },
    checkbox: {
      color: theme.palette.primary.main,
    },
    registrationBtn: {
      width: '100%',
      background: theme.palette.primary.dark,
      color: theme.palette.white.main,
      height: '54px',
    },
  };
});
