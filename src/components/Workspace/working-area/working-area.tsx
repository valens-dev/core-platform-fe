import { Box, Button } from '@mui/material';

import { type ITool } from '@/types/tool';

import { appText } from '@/constants/strings';

import { ToolItem } from './tool-item';

import { type IWorkingAreaProps } from './types';

import useStyles from './styles';

const text = appText.workspacePage.menuItems;

export function WorkingArea({
  selectedTools,
  setSelectedTools,
}: IWorkingAreaProps): JSX.Element {
  const { classes } = useStyles();

  const handleDeleteTool = (tool: ITool): void => {
    setSelectedTools((prevTools) =>
      prevTools.filter((t) => t.tool !== tool.tool),
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
