import { ButtonProps as MuiButtonProps } from '@mui/material'
import { ColorVariant } from '../models/styles'

export enum AuthTab {
  Login = 'login',
  Registration = 'registration',
}

export type TexFieldVariant = 'outlined' | 'filled' | 'standard'

type ButtonVariant = 'text' | 'outlined' | 'contained' | undefined

export type ButtonProps = {
  variant?: ButtonVariant
  colorVariant?: ColorVariant
  isSubmitting?: boolean
} & Omit<MuiButtonProps, 'color' | 'size'>
