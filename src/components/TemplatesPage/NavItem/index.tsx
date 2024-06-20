import { Box, Typography } from '@mui/material';

import { INavItemProps } from '@components/TemplatesPage/interfaces';
import { getNavItemClasses } from './constants';

import RightArrow from '@assets/icons/right-arrow-icon.svg?react';

import useStyles from './styles';

function NavItem({
  icon: Icon,
  navTitle,
  hasArrow,
  index,
  handleMenuOpen,
  handleMenuClose,
  hoveredNavItem,
}: INavItemProps) {
  const { classes } = useStyles();

  const { navItemClass, iconClass, navTextClass } = getNavItemClasses(
    hoveredNavItem,
    index,
    classes
  );

  return (
    <Box
      className={navItemClass}
      onMouseEnter={(e) => hasArrow && handleMenuOpen(e, index)}
      onMouseLeave={handleMenuClose}
    >
      <Icon className={iconClass} />
      <Typography className={navTextClass}>{navTitle}</Typography>
      {hasArrow && <RightArrow className={classes.arrowIcon} />}
    </Box>
  );
}

export default NavItem;
