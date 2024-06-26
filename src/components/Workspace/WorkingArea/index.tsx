import { Box, Button } from '@mui/material';

import { ITool, IWorkingAreaProps } from '../interfaces';
import ToolItem from './ToolItem';

import { appText } from '@utils/strings';
import useStyles from './styles';

function WorkingArea({ selectedTools, setSelectedTools }: IWorkingAreaProps) {
  const text = appText.workspace.menuItems;
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

export default WorkingArea;
