import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    padding: '90px 50px 120px 50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '24px',
  },
  note: {
    color: theme.palette.light.dark,
  },
}))

export default useStyles
