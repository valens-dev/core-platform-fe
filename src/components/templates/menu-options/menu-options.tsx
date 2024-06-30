import { Box, MenuItem, ClickAwayListener } from '@mui/material';

import { useStyles } from './styles';

interface IMenuOptionsProps {
  menuPosition: { top: number; left: number } | null;
  selectedOptions: number[];
  handleOptionClick: (option: number) => void;
  handleMenuClose: () => void;
  setIsMouseOverMenu: (isMouseOver: boolean) => void;
}

export function MenuOptions({
  menuPosition,
  selectedOptions,
  handleOptionClick,
  handleMenuClose,
  setIsMouseOverMenu,
}: IMenuOptionsProps): React.ReactNode {
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
