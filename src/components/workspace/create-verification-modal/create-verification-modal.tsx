import { Box, Typography } from '@mui/material';

import { appText } from '@/constants/strings';

import XIcon from '@/assets/icon/x-icon.svg?react';

import { VerificationStepper } from './verification-stepper';

import { type ICreateVerifyModalProps } from './types';

import { useStyles } from './styles';

const text = appText.workspacePage;

export function CreateVerificationModal({
  handleCloseModal,
}: ICreateVerifyModalProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.titleAndCloseButton}>
        <Typography variant="h6">
          {text.createVerificationModal.title}
        </Typography>
        <XIcon onClick={handleCloseModal} className={classes.closeButton} />
      </Box>
      <Typography variant="body2" className={classes.note}>
        {text.createVerificationModal.note}
      </Typography>
      <VerificationStepper />
    </Box>
  );
}
