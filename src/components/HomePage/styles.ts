import { tss } from '@styles/theme'

const useStyles = tss.create(() => ({
  wrapper: {
    paddingTop: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'right',
  },
}))

export default useStyles
