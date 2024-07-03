import { Box, TextField, InputAdornment } from '@mui/material';

import { SelectOption } from '@/shared/select-option';

import { ChangeView } from './change-view';

import { OPTIONS } from '@/constants/search';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { useStyles } from './styles';

interface ISearchBarProps {
  viewMode: string;
  onViewModeChange: (mode: string) => void;
  selectMode: string;
  onSelectModeChange: (mode: string) => void;
}

export function SearchBar({
  viewMode,
  onViewModeChange,
  selectMode,
  onSelectModeChange,
}: ISearchBarProps) {
  const { classes } = useStyles();

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
        onChange={(e) => {
          return onSelectModeChange(e.target.value);
        }}
        options={OPTIONS}
      />
      <ChangeView viewMode={viewMode} onViewModeChange={onViewModeChange} />
    </Box>
  );
}
