export const getNavItemClasses = (
  hoveredNavItem: number | null,
  index: number,
  classes: any
) => {
  const isHovered = hoveredNavItem === index;
  const navItemClass = `${classes.navItem} ${isHovered ? classes.hoveredNavItem : ''}`;
  const iconClass = `${classes.icon} ${isHovered ? classes.hoveredIcon : ''}`;
  const navTextClass = `${classes.navText} ${isHovered ? classes.hoveredText : ''}`;

  return {
    navItemClass,
    iconClass,
    navTextClass,
  };
};
