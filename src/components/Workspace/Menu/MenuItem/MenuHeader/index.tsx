import { Box, IconButton, Typography } from '@mui/material';

import { IMenuHeaderProps } from '@components/Workspace/interfaces';

import DownArrowIcon from '@assets/icons/downarrow-grey-icon.svg?react';

import useStyles from './styles';

function MenuHeader({ label, index, handleArrowClick }: IMenuHeaderProps) {
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

export default MenuHeader;
