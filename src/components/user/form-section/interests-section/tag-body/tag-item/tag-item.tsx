import { Box, Typography } from '@mui/material';

import XIcon from '@/assets/icon/x-icon.svg?react';

import { useStyles } from './styles';

interface ITagItemProps {
  tagTitle: string;
}

export function TagItem({ tagTitle }: ITagItemProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.tagItem}>
      <Typography variant="body2" className={classes.title}>
        {tagTitle}
      </Typography>
      <XIcon className={classes.closeIcon} />
    </Box>
  );
}
