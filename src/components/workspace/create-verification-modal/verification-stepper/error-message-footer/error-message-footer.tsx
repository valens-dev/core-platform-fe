import { Box, Paper, Typography } from '@mui/material';

import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import XCircleIcon from '@/assets/icon/close-circle-icon.svg?react';

import { useStyles } from './styles';

const text = appText.workspacePage;

export function ErrorMessageFooter(): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Paper className={classes.footer} square elevation={0} sx={{ p: 3 }}>
      <Box className={classes.errorAccountMessages}>
        <Box className={classes.unlockAccountMessageItem}>
          <XCircleIcon />
          <Typography variant="body2">
            {text.createVerificationModal.frozenAccountMessage}
          </Typography>
          <Typography variant="body2" className={classes.browseText}>
            {text.createVerificationModal.thatImmediatelyMessage}
          </Typography>
        </Box>
        <Box className={classes.unlockAccountMessageItem}>
          <XCircleIcon />
          <Typography variant="body2">
            {text.createVerificationModal.notAbleToPayAccountMessage}
          </Typography>
          <Typography variant="body2" className={classes.browseText}>
            {text.createVerificationModal.applyUnlockMessage}
          </Typography>
        </Box>
      </Box>
      <Button className={classes.goBackButton}>
        {text.createVerificationModal.goBackButtonName}
      </Button>
    </Paper>
  );
}
