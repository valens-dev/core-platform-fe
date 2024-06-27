import { MouseEvent, useState } from 'react';
import { Box, Menu, MenuItem, Typography } from '@mui/material';
import Draggable from 'react-draggable';

import { IToolItemProps } from '@components/Workspace/interfaces';
import { ITool } from '@utils/interfaces';

import useStyles from './styles';

function ToolItem({ tools, onDelete }: IToolItemProps) {
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

export default ToolItem;
