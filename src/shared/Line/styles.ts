import { tss } from '../../styles/theme'

const useStyles = tss.create(({ theme }) => ({
  line: {
    background: theme.palette.light.dark,
  },
}))

export default useStyles
