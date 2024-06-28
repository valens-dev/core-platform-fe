import { Chip as MuiChip } from '@mui/material';

interface IChipProps {
  className?: string;
  label?: string;
}

export function Chip({ className, label }: IChipProps) {
  return <MuiChip className={className} label={label} />;
}
