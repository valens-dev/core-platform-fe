interface ChipStyle {
  background: string;
  '& > span': { color: string };
  border: string;
}

export const getChipStyle = (background: string, color: string): ChipStyle => {
  return {
    background,
    '& > span': { color },
    border: `1px solid ${color}`,
  };
};
