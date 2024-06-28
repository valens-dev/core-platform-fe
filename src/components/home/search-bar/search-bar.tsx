import { useState } from 'react';

import { Box, TextField, IconButton, InputAdornment } from '@mui/material';

import { SelectOption } from '@/shared/select-option';

import { OPTIONS } from '@/constants/search';

import GridView from '@/assets/icon/change-view-icon.svg';
import ViewList from '@/assets/icon/lines-icon.svg?react';
import SearchIcon from '@/assets/icon/search-icon.svg?react';

import useStyles from './styles';

export function SearchBar() {
  const [viewMode, setViewMode] = useState('Last viewed');
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
        value={viewMode}
        onChange={(e) => setViewMode(e.target.value as string)}
        options={OPTIONS}
      />
      <Box className={classes.iconWrapper}>
        <IconButton>
          <GridView />
        </IconButton>
        <IconButton>
          <ViewList />
        </IconButton>
      </Box>
    </Box>
  );
}
