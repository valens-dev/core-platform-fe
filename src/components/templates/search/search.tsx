import { useForm } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { TextField } from '@/shared/text-field';

import { type ISearchFormData } from '@/types/search';

import { appText } from '@/constants/strings';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { TemplateChips } from './template-chips';
import { TextFieldEndButton } from './text-field-end-button';

import { useStyles } from './styles';

const text = appText.homePage.search;

export function Search(): React.ReactNode {
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
