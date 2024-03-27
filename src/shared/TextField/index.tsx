import React from 'react'
import classnames from 'classnames'
import { Control, useFormState } from 'react-hook-form'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import {
  BaseTextFieldProps,
  TextField as MuiTextField,
  Typography,
} from '@mui/material'

import useStyles from './styles'

type TexFieldVariant = 'outlined' | 'filled' | 'standard'

interface ITextField extends BaseTextFieldProps {
  label?: string
  className?: string
  placeholder?: string
  register?: UseFormRegisterReturn
  control?: Control<any, any>
  variant?: TexFieldVariant
  customOnChange?: (value: string) => void
}

const TextField: React.FC<ITextField> = ({
  label,
  className,
  placeholder,
  register,
  control,
  variant,
  customOnChange,
}) => {
  const { errors } = useFormState({ control })
  const error = errors[register?.name ?? '']?.message as string
  const classes = useStyles()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    if (register) register.onChange(e)
    if (customOnChange) customOnChange(newValue ?? '')
  }

  return (
    <div>
      {!!label && <Typography variant="body1">{label}</Typography>}
      <MuiTextField
        className={classnames(classes.classes.textField, className)}
        onChange={handleChange}
        error={!!error}
        variant={variant}
        placeholder={placeholder}
        classes={{
          root: classes.classes.root,
        }}
        {...register}
      />
      {!!error && (
        <Typography variant="subtitle2" className={classes.classes.errorText}>
          {error}
        </Typography>
      )}
    </div>
  )
}

export default TextField
