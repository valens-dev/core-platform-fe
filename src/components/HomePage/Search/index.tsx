import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import TextField from '@shared/TextField';
import Button from '@shared/Button';
import Template from './Template';

import SearchIcon from '@assets/icons/search-icon.svg?react';
import { ISearchForm } from '@components/TemplatesPage/interfaces';
import { templateChips, templates } from '../constants';

import { ColorVariant } from '@models/styles';
import { appText } from '@utils/strings';
import useStyles from './styles';

function Search() {
  const text = appText.homepage.search;
  const navigate = useNavigate();
  const { control, register } = useForm<ISearchForm>();
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
        {templateChips.map(({ label, background, color }, i) => (
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
        {templates.map(({ imgSrc, label, link }, i) => (
          <Template key={i} imgSrc={imgSrc} label={label} link={link} />
        ))}
      </Box>
    </Box>
  );
}

export default Search;
