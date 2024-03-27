import { tss } from '../../../styles/theme'

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
    color: theme.palette.light.dark,
    '& .MuiTypography-body1': {
      fontSize: '14px',
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
    fontFamily: 'Open Sans, sans-serif',
    color: theme.palette.light.dark,
    textDecorationColor: theme.palette.light.dark,
    cursor: 'pointer',
  },
  loginBtn: {
    width: '100%',
    background: theme.palette.primary.dark,
    color: theme.palette.white.main,
    height: '50px',
  },
}))

export default useStyles
