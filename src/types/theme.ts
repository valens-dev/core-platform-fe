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

interface Typography {
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

interface Palette {
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

interface Breakpoints {
  values: BreakpointValues;
}

export interface ITheme {
  palette: Palette;
  typography: Typography;
  breakpoints: Breakpoints;
}
