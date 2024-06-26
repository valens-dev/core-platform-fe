import { Box } from '@mui/material';
import { useState } from 'react';

import {
  handleArrowClick,
  handlePlusClick,
  handleToolClick,
} from '@utils/menuHandlers';
import Menu from './Menu';
import WorkingArea from './WorkingArea';
import { ITool } from './interfaces';

import { appText } from '@utils/strings';
import useStyles from './styles';

function Workspace() {
  const { classes } = useStyles();
  const text = appText.workspace.menuItems;
  const [menu, setMenu] = useState([
    { id: 1, label: text.labelName, isOpen: false },
  ]);
  const [selectedTools, setSelectedTools] = useState<ITool[]>([]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.content}>
        <Menu
          menu={menu}
          handleArrowClick={(id) => handleArrowClick(id, setMenu)}
          handlePlusClick={(id) => handlePlusClick(id, menu, setMenu)}
          handleToolClick={(tool, icon) =>
            handleToolClick(tool, icon, selectedTools, setSelectedTools)
          }
        />
        <WorkingArea
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}
        />
      </Box>
    </Box>
  );
}

export default Workspace;
