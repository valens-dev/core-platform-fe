import { Box, IconButton } from '@mui/material';

import { IMenuItemProps } from '@components/Workspace/interfaces';
import MenuContent from './MenuContent';
import MenuHeader from './MenuHeader';

import PlusIcon from '@assets/icons/plus-icon.svg?react';

import useStyles from './styles';

function MenuItem({
  menu,
  index,
  handleArrowClick,
  handlePlusClick,
  handleToolClick,
}: IMenuItemProps) {
  const { classes } = useStyles();

  return (
    <Box
      className={menu.isOpen ? classes.menuOpen : classes.menuClosed}
      style={{ marginLeft: `${index * 20}px` }}
    >
      <MenuHeader
        label={menu.label}
        index={index}
        handleArrowClick={() => handleArrowClick(menu.id)}
      />
      {menu.isOpen && (
        <>
          <MenuContent handleToolClick={handleToolClick} />
          <Box className={classes.plusContainer}>
            <IconButton
              onClick={() => handlePlusClick(menu.id)}
              className={classes.plusButton}
            >
              <Box className={classes.icon}>
                <PlusIcon />
              </Box>
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
}

export default MenuItem;
