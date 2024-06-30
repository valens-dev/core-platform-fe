import { type ButtonProps as MuiButtonProps } from '@mui/material';

import { type ColorVariant } from '@/types/style';

type ButtonVariant = 'text' | 'outlined' | 'contained' | undefined;

export type IButtonProps = {
  variant?: ButtonVariant;
  colorVariant?: ColorVariant;
  isSubmitting?: boolean;
  startIcon?: React.ReactNode;
} & Omit<MuiButtonProps, 'color' | 'size'>;
