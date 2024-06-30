import { Box, IconButton, Typography } from '@mui/material';

import DownArrowIcon from '@/assets/icon/downarrow-grey-icon.svg?react';

import { useStyles } from './styles';

interface IMenuHeaderProps {
  label: string;
  index: number;
  handleArrowClick: () => void;
}

export function MenuHeader({
  label,
  index,
  handleArrowClick,
}: IMenuHeaderProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.menuHeader}>
      <Typography>{label}</Typography>
      {index === 0 && (
        <IconButton onClick={handleArrowClick}>
          <Box className={classes.icon}>
            <DownArrowIcon />
          </Box>
        </IconButton>
      )}
    </Box>
  );
}
