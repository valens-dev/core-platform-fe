import { type IChipStyle } from '@/types/style';

export function getChipStyle(background: string, color: string): IChipStyle {
  return {
    background,
    '& > span': { color },
    border: `1px solid ${color}`,
  };
}
