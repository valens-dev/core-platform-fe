import { Box, Typography } from '@mui/material';

import Line from '@shared/Line';
import { getNavLinks } from '@components/Header/navLinks';

import MicrosoftIcon from '@assets/icons/microsoft-icon.svg?react';
import GithubIcon from '@assets/icons/github.svg?react';
import LinkedInIcon from '@assets/icons/linkedIn.svg?react';

import { appText } from '@utils/strings';
import useStyles from './styles';

function Footer() {
  const text = appText.footer;
  const pages = getNavLinks();
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.links}>
        {pages.map(({ label }, i) => (
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

export default Footer;
