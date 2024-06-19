import { useState } from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@assets/icon/search-icon.svg?react';
import GridView from '@assets/icon/changeview-icon.svg?react';
import ViewList from '@assets/icon/lines-icon.svg?react';
import SelectOption from '../../../shared/SelectOption';
import { options } from '../Search/constants';
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
