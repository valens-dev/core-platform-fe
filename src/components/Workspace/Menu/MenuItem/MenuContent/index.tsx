import { Box, Button } from '@mui/material';

import { azureTools } from '@components/Workspace/constants';
import { IMenuContentProps } from '@components/Workspace/interfaces';

import useStyles from './styles';

function MenuContent({ handleToolClick }: IMenuContentProps) {
  const { classes } = useStyles();

  return (
    <Box className={classes.menuContent}>
      <Box className={classes.buttonContainer}>
        {azureTools.map((type) => (
          <Button
            key={type.tool}
            variant="outlined"
            className={classes.menuButton}
            onClick={() => handleToolClick(type.tool, type.icon)}
          >
            {type.tool}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default MenuContent;
