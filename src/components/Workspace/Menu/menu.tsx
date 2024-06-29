import { Box } from '@mui/material';

import { MenuItem } from './menu-item';

import useStyles from './styles';

interface IMenuProps {
  menu: { id: number; label: string; isOpen: boolean }[];
  handleArrowClick: (id: number) => void;
  handlePlusClick: (id: number) => void;
  handleToolClick: (
    tool: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  ) => void;
}

export function Menu({
  menu,
  handleArrowClick,
  handlePlusClick,
  handleToolClick,
}: IMenuProps): JSX.Element {
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
