export const getLeftArrowClassName = (
  pathname: string,
  classes: any,
): string => {
  return `${classes.arrow} ${pathname === '/homepage/templates' ? classes.blackArrow : ''}`;
};
