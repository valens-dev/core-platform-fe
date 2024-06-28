import React from 'react';
import { useFormState } from 'react-hook-form';
import { TextField as MuiTextField, Typography } from '@mui/material';
import classnames from 'classnames';

import { ITextFieldProps } from './types';

import useStyles from './styles';

export function TextField({
  label,
  className,
  placeholder,
  register,
  control,
  variant,
  startIcon,
  endIcon,
  size = 'small',
  customOnChange,
  ...props
}: ITextFieldProps) {
  const { errors } = useFormState({ control });
  const error = errors[register?.name ?? '']?.message as string;
  const { classes } = useStyles();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if (register) register.onChange(e);
    if (customOnChange) customOnChange(newValue ?? '');
  }

  return (
    <div>
      {!!label && <Typography variant="body1">{label}</Typography>}
      <MuiTextField
        className={classnames(classes.textField, className)}
        onChange={handleChange}
        error={!!error}
        variant={variant}
        placeholder={placeholder}
        size={size}
        InputProps={{
          startAdornment: startIcon,
          endAdornment: endIcon,
          classes: {
            adornedStart: classes.adornedStart,
          },
        }}
        {...register}
        {...props}
      />
      {!!error && (
        <Typography variant="subtitle2" className={classes.errorText}>
          {error}
        </Typography>
      )}
    </div>
  );
}
