import { Box } from '@mui/material';

import { NavItem } from '../nav-item';
import { MenuOptions } from '../menu-options';
import { TemplateList } from '../template-list';

import useStyles from './styles';

interface ITemplateContentProps {
  menuPosition: { top: number; left: number } | null;
  selectedOptions: number[];
  handleOptionClick: (option: number) => void;
  handleMenuClose: () => void;
  setIsMouseOverMenu: (isMouseOver: boolean) => void;
  hoveredNavItem: number | null;
  handleMenuOpen: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  navData: { icon: React.ElementType; navTitle: string; hasArrow: boolean }[];
}

export function TemplateContent({
  menuPosition,
  selectedOptions,
  handleOptionClick,
  handleMenuClose,
  setIsMouseOverMenu,
  hoveredNavItem,
  handleMenuOpen,
  navData,
}: ITemplateContentProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.contentWrapper}>
      <Box className={classes.navigation}>
        {navData.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            navTitle={item.navTitle}
            hasArrow={item.hasArrow}
            index={index}
            handleMenuOpen={handleMenuOpen}
            handleMenuClose={handleMenuClose}
            hoveredNavItem={hoveredNavItem}
          />
        ))}
      </Box>
      <MenuOptions
        menuPosition={menuPosition}
        selectedOptions={selectedOptions}
        handleOptionClick={handleOptionClick}
        handleMenuClose={handleMenuClose}
        setIsMouseOverMenu={setIsMouseOverMenu}
      />
      <TemplateList />
    </Box>
  );
}
