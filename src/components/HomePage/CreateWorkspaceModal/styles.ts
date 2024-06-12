import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    background: theme.palette.white.main,
    width: '572px',
    height: '555px',
    padding: '24px',
    borderRadius: '2px',
  },
  note: {
    color: theme.palette.light.dark,
  },
  formWrapper: {
    marginTop: '20px',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  button: {
    marginTop: '15px',
    height: '39px',
  },
}))

export default useStyles
