interface IFontFamily {
  primary: string;
  secondary: string;
}

interface IFontWeights {
  extraLight: number;
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
  extraBold: number;
  black: number;
}

interface IFontSizes {
  verySmall: string;
  small: string;
  smallToMedium: string;
  medium: string;
  mediumToLarge: string;
  large: string;
  largePlus: string;
  veryLarge: string;
  extraLarge: string;
  huge: string;
}

interface ITypography {
  fontFamily: IFontFamily;
  fontWeight: IFontWeights;
  fontSize: IFontSizes;
}

interface IColor {
  main?: string;
  success?: string;
  info?: string;
  dark?: string;
  mainGrey?: string;
  grey?: string;
  normalGrey?: string;
  lightGrey?: string;
  darkGrey?: string;
  light?: string;
  purple?: string;
  normal?: string;
  black?: string;
}

interface IBlueColor {
  lightBlue: string;
  mediumBlue: string;
}

interface IBlackColor {
  primaryBlack: string;
  secondaryBlack: string;
}

interface IPalette {
  primary: IColor;
  white: IColor;
  error: IColor;
  light: IColor;
  dark: IColor;
  orange: IColor;
  green: IColor;
  blue: IBlueColor;
  black: IBlackColor;
  grey: IColor;
}

interface IBreakpointValues {
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

interface IBreakpoints {
  values: IBreakpointValues;
}

export interface ITheme {
  palette: IPalette;
  typography: ITypography;
  breakpoints: IBreakpoints;
}
