interface INavItemClasses {
  navItemClass: string;
  iconClass: string;
  navTextClass: string;
}

export const getNavItemClasses = (
  hoveredNavItem: number | undefined,
  index: number,
  classes: Record<string, string>,
): INavItemClasses => {
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
