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
  noteWrapper: {
    width: '70%',
  },
  note: {
    color: theme.palette.light.grey,
  },
  aboutUsText: {
    marginTop: '30px',
  },
}))

export default useStyles
