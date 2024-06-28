import { Box, Button } from '@mui/material';

import { IWorkingAreaProps } from './types';
import { ITool } from '@/types/tool';
import { ToolItem } from './tool-item';

import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.workspacePage.menuItems;

export function WorkingArea({
  selectedTools,
  setSelectedTools,
}: IWorkingAreaProps) {
  const { classes } = useStyles();

  const handleDeleteTool = (tool: ITool) => {
    setSelectedTools((prevTools) =>
      prevTools.filter((t) => t.tool !== tool.tool)
    );
  };

  return (
    <Box className={classes.rightSide}>
      <Box className={classes.buttons}>
        <Button variant="outlined" className={classes.buttonOutlined}>
          {text.additionalResources}
        </Button>
        <Button variant="contained" className={classes.buttonVerification}>
          {text.verificate}
        </Button>
      </Box>
      <Box className={classes.backgroundContainer}>
        <Box className={classes.selectedTools}>
          <ToolItem tools={selectedTools} onDelete={handleDeleteTool} />
        </Box>
      </Box>
    </Box>
  );
}