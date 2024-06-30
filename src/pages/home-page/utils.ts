export function getLeftArrowClassName(
  pathname: string,
  classes: Record<string, string>,
): string {
  return `${classes.arrow} ${pathname === '/homepage/templates' ? classes.blackArrow : ''}`;
}
