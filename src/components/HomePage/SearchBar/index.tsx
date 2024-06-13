import { useState } from 'react';
import {
  Box,
  MenuItem,
  Select,
  TextField,
  IconButton,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@assets/icon/search-icon.svg?react';
import GridView from '@assets/icon/changeview-icon.svg?react';
import ViewList from '@assets/icon/lines-icon.svg?react';
import DownArrowIcon from '@assets/icon/arrow-down.svg?react';
import { appText } from '@utils/strings';
import useStyles from './styles';

function SearchBar() {
  const [viewMode, setViewMode] = useState('Last viewed');
  const text = appText.homepage;
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
      <Select
        value={viewMode}
        onChange={(e) => setViewMode(e.target.value)}
        className={classes.viewSelect}
        IconComponent={DownArrowIcon}
        classes={{ icon: classes.selectIcon }}
        disableUnderline
      >
        <MenuItem value="Last viewed">{text.search.lastViewed}</MenuItem>
      </Select>
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
