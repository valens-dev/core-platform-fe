import { Box } from '@mui/material';

import PencilIcon from '@/assets/icon/pencil-icon.svg?react';

import { useStyles } from './styles';

export function Footer(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.footer}>
      <PencilIcon />
      <Box className={classes.line} />
    </Box>
  );
}
