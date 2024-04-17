import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    display: 'flex',
    gap: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '60px 0 40px 0',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      justifyContent: 'start',
    },
  },
  cards: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    gap: '60px',
  },
  card: {
    height: '100px',
    width: '800px',
  },
  cardHeader: {
    display: 'flex',
    gap: '10px',
  },
  description: {
    color: theme.palette.light.grey,
  },
  bookADemoBtn: {
    width: '140px',
    height: '55px',
    '& > p': {
      fontWeight: theme.typography.fontWeight.bold,
    },
  },
  image: {
    marginTop: '50px',
    width: '640px',
    height: '594px',
    borderRadius: '12px',
    background: 'linear-gradient(100.26deg, #809FF0 0%, #4C62C5 100%)',
  },
}))

export default useStyles
