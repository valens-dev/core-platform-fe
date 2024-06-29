import { useNavigate } from 'react-router-dom';

import classNames from 'classnames';

import { Box, Link as MuiLink } from '@mui/material';

import { ColorVariant } from '@/types/style';

import { type ILinkProps } from './types';

import useStyles from './styles';

export function Link({
  label,
  href = '',
  colorVariant = ColorVariant.Light,
  className,
  underline = true,
  endIcon,
}: ILinkProps): JSX.Element {
  const navigate = useNavigate();
  const { classes } = useStyles({ colorVariant, underline });

  return (
    <Box className={classes.wrapper} onClick={() => navigate(href)}>
      <MuiLink className={classNames(classes.link, className)}>{label}</MuiLink>
      {endIcon}
    </Box>
  );
}
