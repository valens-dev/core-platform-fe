/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';
import { Control } from 'react-hook-form';
import { BaseTextFieldProps, SelectChangeEvent } from '@mui/material';

import { AuthTab, TexFieldVariant } from './types';

import { ColorVariant } from '@models/styles';

export interface BaseLayout {
  children?: ReactNode;
}

export interface IProvider extends BaseLayout {}

export interface ILandingPageLayout extends BaseLayout {}

export interface IAuth {
  tab?: AuthTab;
}

export interface ILoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IRegistrationFormData {
  username: string;
  email: string;
  password: string;
  termsAndConditions: boolean;
}

export interface IHeader {
  scrollToContactUs?: () => void;
  scrollToAboutUs?: () => void;
  scrollToHowWeWork?: () => void;
}

export interface IContactUs {
  contactUsRef: React.RefObject<HTMLDivElement>;
}

export interface IAboutUs {
  aboutUsRef: React.RefObject<HTMLDivElement>;
}
export interface IHowWeWork {
  howWeWorkRef: React.RefObject<HTMLDivElement>;
  scrollToContactUs: () => void;
}

export interface IContactFormData {
  name: string;
  email: string;
  message: string;
}

type TexFieldSize = 'small' | 'medium';

export interface ITextField extends BaseTextFieldProps {
  label?: string;
  className?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  control?: Control<any, any>;
  variant?: TexFieldVariant;
  size?: TexFieldSize;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  customOnChange?: (value: string) => void;
}

export interface ISocialAuthButtons {
  isActiveTabLogin: boolean;
}

export interface ILine {
  className?: string;
}

export interface IChip {
  className?: string;
  label?: string;
}

export interface Theme {
  palette: Palette;
  typography: Typography;
  breakpoints: Breakpoints;
}

export interface ILink {
  label: string;
  href?: string;
  colorVariant?: ColorVariant;
  className?: string;
  underline?: boolean;
  endIcon?: ReactNode;
}

interface FontFamily {
  primary: string;
  secondary: string;
}

interface FontWeights {
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

export interface Typography {
  fontFamily: FontFamily;
  fontWeight: FontWeights;
}

interface Color {
  main?: string;
  success?: string;
  info?: string;
  dark?: string;
  grey?: string;
}

interface BlueColor {
  lightBlue: string;
  mediumBlue: string;
}

export interface Palette {
  primary: Color;
  white: Color;
  error: Color;
  light: Color;
  dark: Color;
  orange: Color;
  green: Color;
  blue: BlueColor;
}

interface BreakpointValues {
  xxs: number;
  xs: number;
  sm: number;
  md: number;
  semiLg: number;
  lg: number;
  semiXl: number;
  xl: number;
  xxl: number;
}

export interface Breakpoints {
  values: BreakpointValues;
}

export interface ISelectOptionProps {
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  options: { value: string; label: string }[];
}
