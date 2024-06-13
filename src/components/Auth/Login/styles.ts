import { tss } from '@styles/theme';

const useStyles = tss.create(({ theme }) => ({
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  textField: {
    background: theme.palette.white.main,
  },
  section: {
    display: 'flex',
    alignItems: 'center',
  },
  formControlLabel: {
    width: '50%',
    '& .MuiTypography-body1': {
      fontSize: '14px',
      color: theme.palette.light.dark,
    },
  },
  checkbox: {
    color: theme.palette.primary.main,
  },
  forgotPasswordSection: {
    width: '50%',
    display: 'flex',
    justifyContent: 'right',
    fontSize: '14px',
  },
  link: {
    fontFamily: theme.typography.fontFamily.primary,
    color: theme.palette.light.dark,
    textDecorationColor: theme.palette.light.dark,
    cursor: 'pointer',
  },
  loginBtn: {
    width: '100%',
    height: '50px',
  },
}));

export default useStyles;
