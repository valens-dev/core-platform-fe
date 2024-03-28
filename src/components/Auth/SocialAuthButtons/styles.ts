import { tss } from '../../../styles/theme'

const useStyles = tss.create(({ theme }) => ({
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
  },
  line: {
    width: '46.5%',
    height: '0.5px',
    background: theme.palette.light.dark,
  },
  lightText: {
    fontSize: '12px',
    color: theme.palette.light.dark,
  },
  btn: {
    height: '48px',
  },
}))

export default useStyles
