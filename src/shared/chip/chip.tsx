import { Chip as MuiChip } from '@mui/material';

interface IChipProps {
  className?: string;
  label?: string;
}

export function Chip({ className, label }: IChipProps): React.ReactNode {
  return <MuiChip className={className} label={label} />;
}
