/* eslint-disable import/no-default-export */

import { useState } from 'react';

import { Box } from '@mui/material';

import { Menu } from '@/components/workspace/menu';
import { WorkingArea } from '@/components/workspace/working-area';

import { type ITool } from '@/types/tool';

import { appText } from '@/constants/strings';

import {
  handlePlusClick,
  handleToolClick,
  handleArrowClick,
} from '@/utils/menu-handlers';

import { useStyles } from './styles';

const text = appText.workspacePage.menuItems;

export default function WorkspacePage(): React.ReactNode {
  const { classes } = useStyles();
  const [menu, setMenu] = useState([
    {
      id: 1,
      label: text.labelName,
      isOpen: false,
    },
  ]);
  const [selectedTools, setSelectedTools] = useState<ITool[]>([]);

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.content}>
        <Menu
          menu={menu}
          handleArrowClick={(id) => {
            handleArrowClick(id, setMenu);
          }}
          handlePlusClick={(id) => {
            handlePlusClick(id, menu, setMenu);
          }}
          handleToolClick={(tool, icon) => {
            handleToolClick(tool, icon, selectedTools, setSelectedTools);
          }}
        />
        <WorkingArea
          selectedTools={selectedTools}
          setSelectedTools={setSelectedTools}
        />
      </Box>
    </Box>
  );
}
