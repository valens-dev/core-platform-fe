import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    width: '100%',
    height: '122px',
    display: 'flex',
    borderBottom: `2px solid ${theme.palette.light.main}`,
    '* > p, svg': {
      cursor: 'pointer',
    },
  },
  logo: {
    width: '15%',
    paddingTop: '40px',
    display: 'grid',
    placeItems: 'center',
  },
  links: {
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '40px',
    gap: '40px',
  },
  buttonsAndLinks: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px 60px',
  },
  auth: {
    display: 'flex',
    justifyContent: 'right',
    gap: '20px',
    color: theme.palette.light.grey,
    marginTop: '5px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'right',
    gap: '20px',
    paddingTop: '30px',
    '& > button': {
      height: '44px',
    },
    '& > button > p': {
      fontWeight: theme.typography.fontWeight.bold,
    },
  },
  bookADemoBtn: {
    color: theme.palette.primary.dark,
  },
}))

export default useStyles
