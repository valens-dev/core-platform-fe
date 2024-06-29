import { type ChipStyle } from '@/types/style';

export const getChipStyle = (background: string, color: string): ChipStyle => {
  return {
    background,
    '& > span': { color },
    border: `1px solid ${color}`,
  };
};
