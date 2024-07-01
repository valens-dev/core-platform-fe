import { Box } from '@mui/material';

import { IMenuProps } from '../interfaces';
import MenuItem from './MenuItem';

import useStyles from './styles';

function Menu({
  menu,
  handleArrowClick,
  handlePlusClick,
  handleToolClick,
}: IMenuProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.leftSide}>
      {menu.map((menu, index) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          index={index}
          handleArrowClick={handleArrowClick}
          handlePlusClick={handlePlusClick}
          handleToolClick={handleToolClick}
        />
      ))}
    </Box>
  );
}

export default Menu;
