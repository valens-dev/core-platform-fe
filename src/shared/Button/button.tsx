import { Button as MuiButton } from '@mui/material';
import classNames from 'classnames';

import { ColorVariant } from '@/types/color';

import { IButtonProps } from './types';

import useStyles from './styles';

export function Button({
  children,
  variant = 'contained',
  colorVariant = ColorVariant.Primary,
  className,
  isSubmitting,
  ...props
}: IButtonProps) {
  const { classes } = useStyles({ colorVariant });

  return (
    <MuiButton
      className={classNames(classes.general, className)}
      variant={variant}
      {...props}
    >
      {children}
    </MuiButton>
  );
}