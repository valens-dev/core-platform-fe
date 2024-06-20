import { Box } from '@mui/material';
import NavItem from '../NavItem';
import MenuOptions from '../MenuOptions';
import TemplateList from '../TemplateList';
import useStyles from './styles';
import { ITemplateContentProps } from '../interfaces';

function TemplateContent({
  menuPosition,
  selectedOptions,
  handleOptionClick,
  handleMenuClose,
  setIsMouseOverMenu,
  hoveredNavItem,
  handleMenuOpen,
  navData,
}: ITemplateContentProps) {
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

export default TemplateContent;
