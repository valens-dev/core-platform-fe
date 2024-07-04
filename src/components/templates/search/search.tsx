import { type SetStateAction } from 'react';

import { useSearch } from '@/context/search-provider';

import { Box, TextField, Typography, InputAdornment } from '@mui/material';

import { appText } from '@/constants/strings';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { TemplateChips } from './template-chips';
import { TextFieldEndButton } from './text-field-end-button';

import { useStyles } from './styles';

const text = appText.homePage.search;

export function Search(): React.ReactNode {
  const { setSearchField } = useSearch();

  const { classes } = useStyles();

  function handleChange(e: {
    target: { value: SetStateAction<string> };
  }): void {
    setSearchField(e.target.value);
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.positionText}>
        <Typography variant="h6">{text.browseTitle}</Typography>
      </Box>
      <TextField
        placeholder={text.textfieldPlaceholder}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <TextFieldEndButton />
            </InputAdornment>
          ),
        }}
        className={classes.textfield}
        onChange={handleChange}
      />
      <TemplateChips />
    </Box>
  );
}
