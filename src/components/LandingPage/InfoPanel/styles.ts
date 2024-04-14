import { tss } from '@styles/theme'

const useStyles = tss.create(({ theme }) => ({
  wrapper: {
    backgroundImage: `
    linear-gradient(to right, #E8E8E8 1px, transparent 1px),
    linear-gradient(to bottom, #E8E8E8 1px, transparent 1px),
    linear-gradient(to right, #E8E8E8 1px, transparent 1px),
    linear-gradient(to bottom, #E8E8E8 1px, transparent 1px)
    `,
    backgroundSize: '50px 50px',
    backgroundColor: theme.palette.light.main,
    width: '100%',
    padding: '90px 60px 60px 60px',
    display: 'flex',
    gap: '20px',
  },
  leftSideContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '45%',
    '& > h4': {
      fontSize: '38px',
    },
  },
  chip: {
    margin: '-30px 0 20px 0',
  },
  greatSupportText: {
    width: '70%',
  },
  makeTheRightMoveText: {
    color: theme.palette.primary.light,
  },
  line: {
    background: theme.palette.primary.light,
    height: '2px',
    width: '350px',
  },
  note: {
    marginTop: '30px',
    color: theme.palette.light.light,
  },
  buttons: {
    display: 'flex',
    marginTop: '90px',
    gap: '20px',
    '& > button': {
      width: '200px',
      height: '54px',
    },
  },
  image: {
    width: '700px',
    height: '400px',
    marginLeft: '200px',
  },
}))

export default useStyles
