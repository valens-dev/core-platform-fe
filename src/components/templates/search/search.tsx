import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

import { TextField } from '@/shared/text-field';
import { ISearchFormData } from '@/types/search';

import { TextFieldEndButton } from './text-field-end-button';
import { TemplateChips } from './template-chips';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.homePage.search;

export function Search() {
  const { control, register } = useForm<ISearchFormData>();
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
        endIcon={<TextFieldEndButton />}
      />
      <TemplateChips />
    </Box>
  );
}
