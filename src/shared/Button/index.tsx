import { Button as MuiButton } from '@mui/material';
import classNames from 'classnames';

import { ColorVariant } from '@models/styles';

import { ButtonProps } from '@utils/types';

import useStyles from './styles';

function Button({
  children,
  variant = 'contained',
  colorVariant = ColorVariant.Primary,
  className,
  isSubmitting,
  ...props
}: ButtonProps) {
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

export default Button;
