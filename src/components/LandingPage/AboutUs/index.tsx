import { Box, Typography } from '@mui/material';

import Chip from '@shared/Chip';
import Link from '@shared/Link';

import ArrowRight from '@assets/icons/arrow-right.svg?react';

import { ColorVariant } from '@models/styles';
import { appText } from '@utils/strings';
import useStyles from './styles';
import { IAboutUs } from '@utils/interfaces';

function AboutUs({ aboutUsRef }: IAboutUs) {
  const text = appText.landingPage.aboutUs;
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

export default AboutUs;