import { Box, Typography } from '@mui/material';

import Button from '@shared/Button';
import Line from '@shared/Line';

import { ISocialAuthButtons } from '@utils/interfaces';
import { appText } from '@utils/strings';

import GoogleLogo from '@assets/logo/google-logo.svg?react';
import MicrosoftLogo from '@assets/icons/microsoft.svg?react';

import useStyles from './styles';

function SocialAuthButtons({ isActiveTabLogin }: ISocialAuthButtons) {
  const text = appText.auth.socialAuthButtons;
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.lines}>
        <Line />
        <Typography variant="body2" className={classes.lightText}>
          {text.or}
        </Typography>
        <Line />
      </Box>
      <Button
        variant="outlined"
        className={classes.btn}
        startIcon={<GoogleLogo />}
      >
        {isActiveTabLogin ? (
          <Typography variant="body2">{text.signInWithGoogle}</Typography>
        ) : (
          <Typography variant="body2">{text.registerWithGoogle}</Typography>
        )}
      </Button>
      <Button
        variant="outlined"
        className={classes.btn}
        startIcon={<MicrosoftLogo />}
      >
        {isActiveTabLogin ? (
          <Typography variant="body2">{text.signInWithMicrosoft}</Typography>
        ) : (
          <Typography variant="body2">{text.registerWithMicrosoft}</Typography>
        )}
      </Button>
    </Box>
  );
}

export default SocialAuthButtons;
