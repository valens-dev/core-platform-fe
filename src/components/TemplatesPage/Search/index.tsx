import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import TextField from '@shared/TextField';
import { ISearchForm } from '@components/TemplatesPage/interfaces';

import TextfieldEndButton from './TextfieldEndButton';
import TemplateChips from './TemplateChips';

import SearchIcon from '@assets/icons/search-icon.svg?react';

import { appText } from '@utils/strings';
import useStyles from './styles';

function Search() {
  const text = appText.homepage.search;
  const { control, register } = useForm<ISearchForm>();
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.positionText}>
        <Typography variant="h6">{text.browseTitle}</Typography>
      </Box>
      <TextField
        control={control}
        register={register('search')}
        placeholder={text.textfieldPlaceholder}
        fullWidth
        className={classes.textfield}
        startIcon={<SearchIcon />}
        endIcon={<TextfieldEndButton />}
      />
      <TemplateChips />
    </Box>
  );
}

export default Search;
