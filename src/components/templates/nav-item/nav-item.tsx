import { Box, Typography } from '@mui/material';

import RightArrow from '@/assets/icon/right-arrow-icon.svg?react';

import { getNavItemClasses } from './utils';

import { useStyles } from './styles';

interface INavItemProps {
  icon: React.ElementType;
  navTitle: string;
  hasArrow: boolean;
  index: number;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  handleMenuClose: () => void;
  hoveredNavItem: number | undefined;
}

export function NavItem({
  icon: Icon,
  navTitle,
  hasArrow,
  index,
  handleMenuOpen,
  handleMenuClose,
  hoveredNavItem,
}: INavItemProps): React.ReactNode {
  const { classes } = useStyles();

  const { navItemClass, iconClass, navTextClass } = getNavItemClasses(
    hoveredNavItem,
    index,
    classes,
  );

  return (
    <Box
      className={navItemClass}
      onMouseEnter={(e) => hasArrow && handleMenuOpen(e, index)}
      onMouseLeave={handleMenuClose}
    >
      <Icon className={iconClass} />
      <Typography className={navTextClass}>{navTitle}</Typography>
      {hasArrow ? <RightArrow className={classes.arrowIcon} /> : undefined}
    </Box>
  );
}
