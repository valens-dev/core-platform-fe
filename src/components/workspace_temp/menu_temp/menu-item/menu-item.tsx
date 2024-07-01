import { Box, IconButton } from '@mui/material';

import PlusIcon from '@/assets/icon/plus-icon.svg?react';

import { MenuHeader } from './menu-header';
import { MenuContent } from './menu-content';

import { useStyles } from './styles';

interface IMenuItemProps {
  menu: { id: number; label: string; isOpen: boolean };
  index: number;
  handleArrowClick: (id: number) => void;
  handlePlusClick: (id: number) => void;
  handleToolClick: (
    tool: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  ) => void;
}

export function MenuItem({
  menu,
  index,
  handleArrowClick,
  handlePlusClick,
  handleToolClick,
}: IMenuItemProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box
      className={menu.isOpen ? classes.menuOpen : classes.menuClosed}
      style={{ marginLeft: `${index * 20}px` }}
    >
      <MenuHeader
        label={menu.label}
        index={index}
        handleArrowClick={() => {
          handleArrowClick(menu.id);
        }}
      />
      {menu.isOpen ? (
        <>
          <MenuContent handleToolClick={handleToolClick} />
          <Box className={classes.plusContainer}>
            <IconButton
              onClick={() => {
                handlePlusClick(menu.id);
              }}
              className={classes.plusButton}
            >
              <Box className={classes.icon}>
                <PlusIcon />
              </Box>
            </IconButton>
          </Box>
        </>
      ) : undefined}
    </Box>
  );
}
