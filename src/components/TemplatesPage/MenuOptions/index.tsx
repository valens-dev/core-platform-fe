import { Box, MenuItem, ClickAwayListener } from '@mui/material';
import useStyles from './styles';
import { IMenuOptionsProps } from '../interfaces';

function MenuOptions({
  menuPosition,
  selectedOptions,
  handleOptionClick,
  handleMenuClose,
  setIsMouseOverMenu,
}: IMenuOptionsProps) {
  const { classes } = useStyles();

  return (
    menuPosition && (
      <ClickAwayListener onClickAway={handleMenuClose}>
        <Box
          onMouseEnter={() => setIsMouseOverMenu(true)}
          onMouseLeave={() => {
            setIsMouseOverMenu(false);
            handleMenuClose();
          }}
          className={classes.menuBox}
          style={{
            top: menuPosition.top,
            left: menuPosition.left,
          }}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <MenuItem
              key={i}
              selected={selectedOptions.includes(i)}
              onClick={() => handleOptionClick(i)}
              className={classes.menuItem}
            >
              Option {i + 1}
            </MenuItem>
          ))}
        </Box>
      </ClickAwayListener>
    )
  );
}

export default MenuOptions;
