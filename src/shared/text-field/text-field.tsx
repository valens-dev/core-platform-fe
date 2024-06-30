import type React from 'react';
import { useFormState } from 'react-hook-form';

import classnames from 'classnames';

import { Typography, TextField as MuiTextField } from '@mui/material';

import { type ITextFieldProps } from './types';

import { useStyles } from './styles';

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
}: ITextFieldProps): JSX.Element {
  const { errors } = useFormState({ control });
  const error = errors[register?.name ?? '']?.message as string;
  const { classes } = useStyles();

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const newValue = e.target.value;
    if (register) {
      await register.onChange(e);
    }
    if (customOnChange) {
      customOnChange(newValue ?? '');
    }
  }

  return (
    <div>
      {Boolean(label) && <Typography variant="body1">{label}</Typography>}
      <MuiTextField
        className={classnames(classes.textField, className)}
        onChange={handleChange}
        error={Boolean(error)}
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
      {Boolean(error) && (
        <Typography variant="subtitle2" className={classes.errorText}>
          {error}
        </Typography>
      )}
    </div>
  );
}
