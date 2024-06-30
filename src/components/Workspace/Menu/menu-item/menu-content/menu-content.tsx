import { Box, Button } from '@mui/material';

import { AZURE_TOOLS } from './constants';

import { useStyles } from './styles';

interface IMenuContentProps {
  handleToolClick: (
    tool: string,
    icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  ) => void;
}

export function MenuContent({
  handleToolClick,
}: IMenuContentProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.menuContent}>
      <Box className={classes.buttonContainer}>
        {AZURE_TOOLS.map((type) => (
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
