import { Box, Paper, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import XCircleIcon from '@/assets/icon/close-circle-icon.svg?react';

import { useStyles } from './styles';

const { createVerificationModal: text } = appText.workspacePage;

export function ErrorMessageFooter(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Paper className={classes.footer} square elevation={0} sx={{ p: 3 }}>
      <Box className={classes.errorAccountMessages}>
        <Box className={classes.unlockAccountMessageItem}>
          <XCircleIcon />
          <Typography variant="body2">{text.frozenAccountMessage}</Typography>
          <Typography variant="body2" className={classes.browseText}>
            {text.thatImmediatelyMessage}
          </Typography>
        </Box>
        <Box className={classes.unlockAccountMessageItem}>
          <XCircleIcon />
          <Typography variant="body2">
            {text.notAbleToPayAccountMessage}
          </Typography>
          <Typography variant="body2" className={classes.browseText}>
            {text.applyUnlockMessage}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.goBackButtonWrapper}>
        <Button className={classes.goBackButton}>
          {text.goBackButtonName}
        </Button>
      </Box>
    </Paper>
  );
}
