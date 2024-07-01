import { Box, Typography } from '@mui/material';

import { Line } from '@/shared/line';
import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import GoogleLogo from '@/assets/logo/google-logo.svg?react';
import MicrosoftLogo from '@/assets/icon/microsoft-icon.svg?react';

import { useStyles } from './styles';

interface ISocialAuthButtonsProps {
  isActiveTabLogin: boolean;
}

const text = appText.auth.socialAuthButtons;

export function SocialAuthButtons({
  isActiveTabLogin,
}: ISocialAuthButtonsProps): React.ReactNode {
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
