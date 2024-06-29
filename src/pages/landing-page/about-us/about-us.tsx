import { Box, Typography } from '@mui/material';

import { Chip } from '@/shared/chip';
import { Link } from '@/shared/link';

import { ColorVariant } from '@/types/style';

import { appText } from '@/constants/strings';

import ArrowRight from '@/assets/icon/arrow-right.svg?react';

import useStyles from './styles';

interface IAboutUsProps {
  aboutUsRef: React.RefObject<HTMLDivElement>;
}

const text = appText.landingPage.aboutUs;

export function AboutUs({ aboutUsRef }: IAboutUsProps): JSX.Element {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper} ref={aboutUsRef}>
      <Chip label={text.chipText} />
      <Typography variant="h2">{text.aboutUs}</Typography>
      <Box className={classes.noteWrapper}>
        <Typography align="center" variant="body1" className={classes.note}>
          {text.note}
        </Typography>
      </Box>
      <Typography className={classes.aboutUsText} align="center" variant="h5">
        {text.aboutUsText}
      </Typography>
      <Link
        label={text.learnMore}
        colorVariant={ColorVariant.PrimaryLight}
        endIcon={<ArrowRight />}
      />
    </Box>
  );
}
