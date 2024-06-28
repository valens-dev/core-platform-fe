import { Box, Typography } from '@mui/material';

import { Line } from '@/shared/line';
import { NAV_LINKS } from '@/constants/navigation';

import MicrosoftIcon from '@/assets/icon/microsoft-icon.svg?react';
import GithubIcon from '@/assets/icon/github-icon.svg?react';
import LinkedInIcon from '@/assets/icon/linkedIn-icon.svg?react';

import { appText } from '@/constants/strings';
import useStyles from './styles';

const text = appText.footer;

export function Footer() {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.links}>
        {NAV_LINKS.map(({ label }, i) => (
          <Typography key={`${label}_${i}`} variant="body1">
            {label}
          </Typography>
        ))}
      </Box>
      <Box className={classes.logos}>
        <MicrosoftIcon />
        <GithubIcon />
        <LinkedInIcon />
      </Box>
      <Line className={classes.line} />
      <Box className={classes.notes}>
        <Box>
          <Typography variant="body2" className={classes.footNote}>
            {text.footNote}
          </Typography>
        </Box>
        <Box className={classes.secondaryLinks}>
          <Typography variant="body2">{text.termsOfUse}</Typography>

          <Typography variant="body2">{text.privacyPolicy}</Typography>
          <Typography variant="body2">{text.security}</Typography>
        </Box>
      </Box>
    </Box>
  );
}