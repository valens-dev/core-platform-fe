import { type ColorVariant } from '@/types/style';

export interface ILinkProps {
  label: string;
  href?: string;
  colorVariant?: ColorVariant;
  className?: string;
  underline?: boolean;
  endIcon?: React.ReactNode;
}
