import { useNavigate } from 'react-router-dom';
import { useState, type SetStateAction } from 'react';

import { Box, TextField, Typography, InputAdornment } from '@mui/material';

import { TextFieldEndButton } from '@/components/templates/search/text-field-end-button';

import { appText } from '@/constants/strings';
import { TEMPLATE_CHIPS } from '@/constants/templates';

import { getChipStyle } from '@/utils/template-chips';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { Template } from './template';

import { TEMPLATES } from './constants';

import { useStyles } from './styles';

const text = appText.homePage.search;

export function Search(): React.ReactNode {
  const [searchField, setSearchField] = useState('');
  const navigate = useNavigate();
  const { classes } = useStyles();

  const filteredTemplates = TEMPLATES.filter((template) => {
    return template.label.toLowerCase().includes(searchField.toLowerCase());
  });

  function handleOpenTemplates(): void {
    navigate('/homepage/templates');
  }

  function handleChange(e: {
    target: { value: SetStateAction<string> };
  }): void {
    setSearchField(e.target.value);
  }

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.positionText}>
        <Typography variant="h6">{text.searchTitle}</Typography>
        <Typography
          className={classes.browseText}
          onClick={handleOpenTemplates}
        >
          {text.browseTemplates}
        </Typography>
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
      <Box className={classes.chipsWrapper}>
        <Typography>{text.tryThis}</Typography>
        {TEMPLATE_CHIPS.map(({ label, background, color }) => {
          return (
            <Box
              key={label}
              className={classes.chip}
              style={getChipStyle(background, color)}
            >
              <Typography variant="body2" style={{ color }}>
                {label}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box className={classes.templateWrapper}>
        {filteredTemplates.map(({ label, imgSrc, link }, index: number) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Template key={index} imgSrc={imgSrc} label={label} link={link} />
          );
        })}
      </Box>
    </Box>
  );
}
