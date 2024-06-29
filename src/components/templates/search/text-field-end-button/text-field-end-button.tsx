import { Typography } from '@mui/material';

import { Button } from '@/shared/button';

import { ColorVariant } from '@/types/style';

import { appText } from '@/constants/strings';

import SearchIcon from '@/assets/icon/search-icon.svg?react';

import { useStyles } from './styles';

const text = appText.homePage.search;

export function TextFieldEndButton(): JSX.Element {
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
}
