import { Box } from '@mui/material';

import { MenuItem } from './menu-item';

import { useStyles } from './styles';

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
}: IMenuProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.leftSide}>
      {menu.map((item, index) => {
        return (
          <MenuItem
            key={item.id}
            menu={item}
            index={index}
            handleArrowClick={handleArrowClick}
            handlePlusClick={handlePlusClick}
            handleToolClick={handleToolClick}
          />
        );
      })}
    </Box>
  );
}
