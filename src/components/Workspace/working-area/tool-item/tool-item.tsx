import Draggable from 'react-draggable';
import { useState, type MouseEvent } from 'react';

import { Box, Menu, MenuItem, Typography } from '@mui/material';

import { type ITool } from '@/types/tool';

import { type IToolItemProps } from './types';

import useStyles from './styles';

export function ToolItem({ tools, onDelete }: IToolItemProps) {
  const { classes } = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedTool, setSelectedTool] = useState<ITool | null>(null);

  const handleDoubleClick = (event: MouseEvent<HTMLElement>, tool: ITool) => {
    setAnchorEl(event.currentTarget);
    setSelectedTool(tool);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedTool(null);
  };

  const handleDelete = () => {
    if (selectedTool) {
      onDelete(selectedTool);
    }
    handleClose();
  };

  return (
    <Box className={classes.toolsContainer}>
      {tools.map((item, index) => (
        <Draggable key={index}>
          <Box
            className={classes.tool}
            onDoubleClick={(event) => handleDoubleClick(event, item)}
          >
            <item.icon className={classes.toolIcon} />
            <Typography className={classes.toolName}>{item.tool}</Typography>
          </Box>
        </Draggable>
      ))}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </Box>
  );
}
