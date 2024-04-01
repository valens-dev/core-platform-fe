import { Box } from '@mui/material'
import classnames from 'classnames'

import { ILine } from '../../utils/interfaces'
import useStyles from './styles'

function Line({ className }: ILine) {
  const { classes } = useStyles()

  return <Box className={classnames(classes.line, className)} />
}

export default Line
