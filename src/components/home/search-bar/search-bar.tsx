import {
  Box,
  TextField,
  InputAdornment,
  type SelectChangeEvent,
} from '@mui/material';

import { SelectOption } from '@/shared/select-option';

import { type ViewMode, type SelectMode } from '@/types/search';

import { OPTIONS } from '@/constants/search';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { ChangeView } from './change-view';

import { useStyles } from './styles';

interface ISearchBarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectMode: SelectMode;
  onSelectModeChange: (mode: SelectMode) => void;
}

export function SearchBar({
  viewMode,
  onViewModeChange,
  selectMode,
  onSelectModeChange,
}: ISearchBarProps): React.ReactNode {
  const { classes } = useStyles();

  function handleSelectModeChange(event: SelectChangeEvent<SelectMode>): void {
    onSelectModeChange(event.target.value as SelectMode);
  }

  function handleViewModeChange(mode: ViewMode): void {
    onViewModeChange(mode);
  }

  return (
    <Box className={classes.searchBar}>
      <TextField
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          ),
          classes: { root: classes.searchField },
        }}
        className={classes.searchField}
      />
      <SelectOption
        value={selectMode}
        onChange={handleSelectModeChange}
        options={OPTIONS}
      />
      <ChangeView viewMode={viewMode} onViewModeChange={handleViewModeChange} />
    </Box>
  );
}
