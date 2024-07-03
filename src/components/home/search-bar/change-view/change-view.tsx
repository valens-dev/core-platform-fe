import { Box, IconButton } from '@mui/material';

import ViewList from '@/assets/icon/lines-icon.svg?react';
import GridView from '@/assets/icon/change-view-icon.svg?react';

import { useStyles } from './styles';

interface IChangeViewProps {
  viewMode: string;
  onViewModeChange: (mode: string) => void;
}

export function ChangeView({
  viewMode,
  onViewModeChange,
}: IChangeViewProps): JSX.Element {
  const { classes } = useStyles();

  function getIconClass(mode: string): string {
    return viewMode === mode ? classes.activeIcon : '';
  }

  return (
    <Box className={classes.iconWrapper}>
      <IconButton
        className={getIconClass('grid')}
        onClick={() => {
          onViewModeChange('grid');
        }}
      >
        <GridView />
      </IconButton>
      <IconButton
        className={getIconClass('list')}
        onClick={() => {
          onViewModeChange('list');
        }}
      >
        <ViewList />
      </IconButton>
    </Box>
  );
}
