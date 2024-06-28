import { ButtonProps as MuiButtonProps } from '@mui/material';

import { ColorVariant } from '@/types/color';

type ButtonVariant = 'text' | 'outlined' | 'contained' | undefined;

export type IButtonProps = {
  variant?: ButtonVariant;
  colorVariant?: ColorVariant;
  isSubmitting?: boolean;
  startIcon?: JSX.Element;
} & Omit<MuiButtonProps, 'color' | 'size'>;
