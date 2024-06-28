export const getLeftArrowClassName = (pathname: string, classes: any) => {
  return `${classes.arrow} ${pathname === '/homepage/templates' ? classes.blackArrow : ''}`;
};
