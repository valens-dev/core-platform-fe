import React from 'react'
import { Button as MuiButton } from '@mui/material'
import classNames from 'classnames'

import { ColorVariant } from '../../models/styles'
import useStyles from './styles'
import { ButtonProps } from '../../utils/types'

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  colorVariant = ColorVariant.Primary,
  className,
  isSubmitting,
  ...props
}) => {
  const { classes } = useStyles({ colorVariant })

  return (
    <MuiButton
      className={classNames(classes.general, className)}
      variant={variant}
      {...props}
    >
      {children}
    </MuiButton>
  )
}

export default Button
