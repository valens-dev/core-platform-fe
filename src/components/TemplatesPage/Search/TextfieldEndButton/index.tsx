import { Typography } from '@mui/material';

import Button from '@shared/Button';

import SearchIcon from '@assets/icons/search-icon.svg?react';

import { ColorVariant } from '@models/styles';
import { appText } from '@utils/strings';
import useStyles from './styles';

const TextfieldEndButton = () => {
  const text = appText.homepage.search;
  const { classes } = useStyles();

  return (
    <Button
      className={classes.textfieldEndButton}
      colorVariant={ColorVariant.Light}
      startIcon={<SearchIcon />}
    >
      <Typography variant="caption">{text.generate}</Typography>
    </Button>
  );
};

export default TextfieldEndButton;
