import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { TextField } from '@/shared/text-field';
import { Button } from '@/shared/button';
import { Template } from './template';

import SearchIcon from '@/assets/icon/search-icon.svg?react';
import { ISearchFormData } from '@/types/search';
import { TEMPLATES } from './constants';
import { TEMPLATE_CHIPS } from '@/constants/templates';

import { ColorVariant } from '@/types/color';
import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.homePage.search;

export function Search() {
  const navigate = useNavigate();
  const { control, register } = useForm<ISearchFormData>();
  const { classes } = useStyles();

  const getChipStyle = (background: string, color: string) => {
    return { background, '& > span': color, border: `1px solid ${color}` };
  };

  const textfieldEndButton = (
    <Button
      className={classes.textfieldEndButton}
      colorVariant={ColorVariant.Light}
      startIcon={<SearchIcon />}
    >
      <Typography variant="caption">{text.generate}</Typography>
    </Button>
  );

  const handleOpenTemplates = () => {
    navigate('/homepage/templates');
  };
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
        {TEMPLATE_CHIPS.map(({ label, background, color }, i) => (
          <Box
            key={i}
            className={classes.chip}
            style={getChipStyle(background, color)}
          >
            <Typography variant="body2" style={{ color }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box className={classes.templateWrapper}>
        {TEMPLATES.map(({ imgSrc, label, link }, i) => (
          <Template key={i} imgSrc={imgSrc} label={label} link={link} />
        ))}
      </Box>
    </Box>
  );
}
