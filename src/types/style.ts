export enum ColorVariant {
  Primary = 'primary',
  PrimaryLight = 'primary-light',
  Secondary = 'secondary',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  White = 'white',
}

export interface ButtonStyle {
  background?: string;
  border?: string;
  '& > p, span'?: {
    color?: string;
  };
  '&:hover'?: {
    background?: string;
    border?: string;
  };
}

export interface ChipStyle {
  background: string;
  '& > span': { color: string };
  border: string;
}
