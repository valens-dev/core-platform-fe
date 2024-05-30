import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
    width: '100%',
    border: '1px solid black',
  },
  marqueeBox: {
    height: '80px',
    borderRadius: '16px',
    border: '1px solid black',
  },
  marqueeContent: {
    display: 'grid',
    gap: '100px',
    overflow: 'hidden',
    border: '1px solid black',
  },
  marqueeItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
  },
}))

export default useStyles
