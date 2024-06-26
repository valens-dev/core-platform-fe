import { Box, Button } from '@mui/material';

import { azureTools } from '@components/Workspace/constants';
import { IMenuContentProps } from '@components/Workspace/interfaces';

import useStyles from './styles';

function MenuContent({ handleToolClick }: IMenuContentProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.menuContent}>
      <Box className={classes.buttonContainer}>
        {azureTools.map((tool) => (
          <Button
            key={tool.tool}
            variant="outlined"
            className={classes.menuButton}
            onClick={() => handleToolClick(tool.tool, tool.icon)}
          >
            {tool.tool}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default MenuContent;
