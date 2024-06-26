import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { Button } from '@/shared/button';
import { TextField } from '@/shared/text-field';

import { ColorVariant } from '@/types/style';
import { type ISearchFormData } from '@/types/search';

import { appText } from '@/constants/strings';
import { TEMPLATE_CHIPS } from '@/constants/templates';

import { getChipStyle } from '@/utils/template-chips';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { Template } from './template';

import { TEMPLATES } from './constants';

import { useStyles } from './styles';

const text = appText.homePage.search;

export function Search(): React.ReactNode {
  const navigate = useNavigate();
  const { control, register } = useForm<ISearchFormData>();
  const { classes } = useStyles();

  const textfieldEndButton = (
    <Button
      className={classes.textfieldEndButton}
      colorVariant={ColorVariant.Light}
      startIcon={<SearchIcon />}
    >
      <Typography variant="caption">{text.generate}</Typography>
    </Button>
  );

  function handleOpenTemplates(): void {
    navigate('/homepage/templates');
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
        control={control}
        register={register('search')}
        placeholder={text.textfieldPlaceholder}
        fullWidth
        className={classes.textfield}
        startIcon={<SearchIcon />}
        endIcon={textfieldEndButton}
      />
      <Box className={classes.chipsWrapper}>
        <Typography>{text.tryThis}</Typography>
        {TEMPLATE_CHIPS.map(({ label, background, color }, i) => {
          return (
            <Box
              /* eslint-disable-next-line react/no-array-index-key */
              key={i}
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
        {TEMPLATES.map(({ imgSrc, label, link }, i) => {
          return (
            /* eslint-disable-next-line react/no-array-index-key */
            <Template key={i} imgSrc={imgSrc} label={label} link={link} />
          );
        })}
      </Box>
    </Box>
  );
}
