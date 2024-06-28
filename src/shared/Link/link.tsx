import { Box, Link as MuiLink } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import useStyles from './styles';

import { ColorVariant } from '@/types/color';
import { ILinkProps } from './types';

export function Link({
  label,
  href = '',
  colorVariant = ColorVariant.Light,
  className,
  underline = true,
  endIcon,
}: ILinkProps) {
  const navigate = useNavigate();
  const { classes } = useStyles({ colorVariant, underline });

  return (
    <Box className={classes.wrapper} onClick={() => navigate(href)}>
      <MuiLink className={classNames(classes.link, className)}>{label}</MuiLink>
      {endIcon}
    </Box>
  );
}
