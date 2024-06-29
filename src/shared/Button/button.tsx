import classNames from 'classnames';

import { Button as MuiButton } from '@mui/material';

import { ColorVariant } from '@/types/color';

import { type IButtonProps } from './types';

import useStyles from './styles';

export function Button({
  children,
  variant = 'contained',
  colorVariant = ColorVariant.Primary,
  className,
  isSubmitting,
  ...props
}: IButtonProps): JSX.Element {
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
