import classnames from 'classnames';

import { Box } from '@mui/material';

import useStyles from './styles';

interface ILineProps {
  className?: string;
}

export function Line({ className }: ILineProps) {
  const { classes } = useStyles();

  return <Box className={classnames(classes.line, className)} />;
}
