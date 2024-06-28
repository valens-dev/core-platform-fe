import { type Control, type UseFormRegisterReturn } from 'react-hook-form';

import { type BaseTextFieldProps } from '@mui/material';

type TexFieldSize = 'small' | 'medium';

type TexFieldVariant = 'outlined' | 'filled' | 'standard';

export interface ITextFieldProps extends BaseTextFieldProps {
  label?: string;
  className?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  control?: Control<any, any>;
  variant?: TexFieldVariant;
  size?: TexFieldSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  customOnChange?: (value: string) => void;
}
