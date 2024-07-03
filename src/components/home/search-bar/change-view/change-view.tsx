import { Box, IconButton } from '@mui/material';

import { ViewMode } from '@/constants/search';

import ViewList from '@/assets/icon/lines-icon.svg?react';
import GridView from '@/assets/icon/change-view-icon.svg?react';

import { useStyles } from './styles';

interface IChangeViewProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ChangeView({
  viewMode,
  onViewModeChange,
}: IChangeViewProps): React.ReactNode {
  const { classes } = useStyles();

  const gridIconClass = viewMode === ViewMode.Grid ? classes.activeIcon : '';
  const listIconClass = viewMode === ViewMode.List ? classes.activeIcon : '';

  return (
    <Box className={classes.iconWrapper}>
      <IconButton
        className={gridIconClass}
        onClick={() => {
          onViewModeChange(ViewMode.Grid);
        }}
      >
        <GridView />
      </IconButton>
      <IconButton
        className={listIconClass}
        onClick={() => {
          onViewModeChange(ViewMode.List);
        }}
      >
        <ViewList />
      </IconButton>
    </Box>
  );
}
