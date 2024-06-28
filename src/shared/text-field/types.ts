import { UseFormRegisterReturn } from 'react-hook-form/dist/types/form';
import { Control } from 'react-hook-form';
import { BaseTextFieldProps } from '@mui/material';

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
