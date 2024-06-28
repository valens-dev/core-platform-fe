export const getChipStyle = (background: string, color: string) => ({
  background,
  '& > span': { color },
  border: `1px solid ${color}`,
});
