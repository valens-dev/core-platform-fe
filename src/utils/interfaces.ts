import { ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { Control } from 'react-hook-form'
import { BaseTextFieldProps } from '@mui/material'

import { AuthTab, TexFieldVariant } from './types'

export interface IProvider {
  children?: ReactNode
}

export interface IAuth {
  tab?: AuthTab
}

export interface ILoginFormData {
  email: string
  password: string
  rememberMe: boolean
}

export interface IRegistrationFormData {
  username: string
  email: string
  password: string
  termsAndConditions: boolean
}

export interface ITextField extends BaseTextFieldProps {
  label?: string
  className?: string
  placeholder?: string
  register?: UseFormRegisterReturn
  control?: Control<any, any>
  variant?: TexFieldVariant
  customOnChange?: (value: string) => void
}

export interface ISocialAuthButtons {
  isActiveTabLogin: boolean
}

export interface ILine {
  className?: string
}

interface FontWeights {
  extraLight: number
  light: number
  regular: number
  medium: number
  semiBold: number
  bold: number
  extraBold: number
  black: number
}

interface TypographyType {
  fontWeight: number
  fontSize: string
  lineHeight: string
}

export interface Typography {
  fontFamily: string
  fontWeight: FontWeights
  body1: TypographyType
}

interface Color {
  main?: string
  success?: string
  info?: string
  dark?: string
  grey?: string
}

export interface Palette {
  primary: Color
  white: Color
  error: Color
  light: Color
  dark: Color
}

interface BreakpointValues {
  xxs: number
  xs: number
  sm: number
  md: number
  semiLg: number
  lg: number
  semiXl: number
  xl: number
  xxl: number
}

export interface Breakpoints {
  values: BreakpointValues
}
