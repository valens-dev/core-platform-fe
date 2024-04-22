import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  root: {
    '& .MuiInput-input': {
      padding: '10px',
    },
  },
  errorText: {
    paddingTop: '5px',
    color: theme.palette.error.main,
  },
  textField: {
    width: '100%',
    marginTop: '5px',
  },
}))

export default useStyles
