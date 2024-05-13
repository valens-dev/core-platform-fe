import { ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form'
import { Control } from 'react-hook-form'
import { BaseTextFieldProps } from '@mui/material'

import { AuthTab, TexFieldVariant } from './types'

import { ColorVariant } from '@models/styles'

export interface BaseLayout {
  children?: ReactNode
}

export interface IProvider extends BaseLayout {}

export interface ILandingPageLayout extends BaseLayout {}

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

export interface IHeader {
  scrollToContactUs: () => void
}

export interface IContactUs {
  contactUsRef: any
}

export interface IHowWeWork {
  scrollToContactUs: () => void
}

export interface IContactFormData {
  name: string
  email: string
  message: string
}

type TexFieldSize = 'small' | 'medium'

export interface ITextField extends BaseTextFieldProps {
  label?: string
  className?: string
  placeholder?: string
  register?: UseFormRegisterReturn
  control?: Control<any, any>
  variant?: TexFieldVariant
  size?: TexFieldSize
  customOnChange?: (value: string) => void
}

export interface ISocialAuthButtons {
  isActiveTabLogin: boolean
}

export interface ILine {
  className?: string
}

export interface IChip {
  className?: string
  label?: string
}

export interface Theme {
  palette: Palette
  typography: Typography
  breakpoints: Breakpoints
}

export interface ILink {
  label: string
  href?: string
  colorVariant?: ColorVariant
  className?: string
  underline?: boolean
  endIcon?: ReactNode
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

export interface Typography {
  fontFamily: string
  fontWeight: FontWeights
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
