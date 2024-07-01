import { useState } from 'react';

import { Box, TextField, IconButton, InputAdornment } from '@mui/material';

import SelectOption from '@shared/SelectOption';
import { options } from '../constants';

import SearchIcon from '@assets/icons/search-icon.svg?react';
import GridView from '@assets/icons/changeview-icon.svg?react';
import ViewList from '@assets/icons/lines-icon.svg?react';

import useStyles from './styles';

function SearchBar() {
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
        options={options}
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

export default SearchBar;
