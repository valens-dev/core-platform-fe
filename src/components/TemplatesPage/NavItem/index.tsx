import { Box, Typography } from '@mui/material';
import RightArrow from '@assets/icon/right-arrow-icon.svg?react';
import useStyles from './styles';
import { INavItemProps } from '../interfaces';

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

  return (
    <Box
      className={`${classes.navItem} ${hoveredNavItem === index ? classes.hoveredNavItem : ''}`}
      onMouseEnter={(e) => hasArrow && handleMenuOpen(e, index)}
      onMouseLeave={handleMenuClose}
    >
      <Icon
        className={`${classes.icon} ${hoveredNavItem === index ? classes.hoveredIcon : ''}`}
      />
      <Typography
        className={`${classes.navText} ${hoveredNavItem === index ? classes.hoveredText : ''}`}
      >
        {navTitle}
      </Typography>
      {hasArrow && <RightArrow className={classes.arrowIcon} />}
    </Box>
  );
}

export default NavItem;
