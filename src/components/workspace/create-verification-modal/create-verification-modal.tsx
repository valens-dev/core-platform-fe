import { Box, Typography } from '@mui/material';

import { Modal } from '@/shared/modal';

import { appText } from '@/constants/strings';

import { VerificationStepper } from './verification-stepper';

import { useStyles } from './styles';

const { createVerificationModal: text } = appText.workspacePage;

interface ICreateVerificationModalProps {
  isModalOpen: boolean;
  handleCloseModal: () => void;
}

export function CreateVerificationModal({
  isModalOpen,
  handleCloseModal,
}: ICreateVerificationModalProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Modal
      isOpen={isModalOpen}
      handleClose={handleCloseModal}
      title={text.title}
    >
      <Box className={classes.wrapper}>
        <Typography variant="body2" className={classes.note}>
          {text.note}
        </Typography>
        <VerificationStepper />
      </Box>
    </Modal>
  );
}
