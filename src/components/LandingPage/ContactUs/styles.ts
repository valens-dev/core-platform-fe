import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    width: '100%',
    background: theme.palette.light.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '30px 50px 30px 50px',
    gap: '24px',
    color: theme.palette.primary.dark,
  },
  contactUs: {
    color: theme.palette.primary.dark,
  },
  note: {
    color: theme.palette.light.dark,
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    '& > svg': {
      cursor: 'pointer',
    },
  },
  contactUsForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '839px',
  },
  textfield: {
    background: theme.palette.white.main,
  },
  contactUsBtnWrapper: {
    display: 'grid',
    placeItems: 'center',
  },
  contactUsBtn: {
    marginTop: '20px',
    height: '64px',
    width: '284px',
    '& > span': {
      fontFamily: 'Poppins',
      fontWeight: theme.typography.fontWeight.bold,
    },
  },
}))

export default useStyles
