import { useState, useEffect } from 'react';

import {
  Box,
  Step,
  Paper,
  Stepper,
  StepLabel,
  Typography,
  StepContent,
} from '@mui/material';

import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import XIcon from '@/assets/icon/x-icon.svg?react';
import XCircleIcon from '@/assets/icon/close-circle.svg?react';

import { type ICreateVerifyModalProps } from './types';

import { useStyles } from './styles';

const text = appText.workspacePage;

const steps = [
  {
    label: text.createVerificationModal.firstTextItemTitle,
    description: text.createVerificationModal.textitemDescription,
  },
  {
    label: text.createVerificationModal.secondTextItemTitle,
    description: text.createVerificationModal.textitemDescription,
  },
  {
    label: text.createVerificationModal.thirdTextItemTitle,
    description: text.createVerificationModal.textitemDescription,
  },
];

export function CreateVerificationModal({
  handleCloseModal,
}: ICreateVerifyModalProps): React.ReactNode {
  const { classes } = useStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [thirdStep, setThirdStep] = useState(false);

  useEffect(() => {
    function randomBoolean(): boolean {
      return Math.random() < 0.5;
    }

    setThirdStep(randomBoolean());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeStep < steps.length) {
        setActiveStep((prevActiveStep) => {
          return prevActiveStep + 1;
        });
      }
    }, 2000);

    if (activeStep === steps.length - 1) {
      steps[2].label =
        thirdStep === true
          ? text.createVerificationModal.textSuccessMessage
          : text.createVerificationModal.textErrorMessage;
    }

    return () => {
      return clearTimeout(timer);
    };
  }, [activeStep, thirdStep]);

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
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => {
            const labelProps: {
              optional?: React.ReactNode;
              error?: boolean;
            } = {};
            if (thirdStep === false && activeStep === 3 && index === 2) {
              labelProps.error = true;
            }
            return (
              <Step key={step.label}>
                <StepLabel {...labelProps} className={classes.textItemTitle}>
                  {step.label}
                  <Typography
                    className={
                      thirdStep === false && activeStep === 3 && index === 2
                        ? classes.hideText
                        : classes.textItemDescription
                    }
                  >
                    {step.description}
                  </Typography>
                </StepLabel>
                <StepContent transitionDuration={1000} />
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && thirdStep === false && (
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
            <Button className={classes.goBackButton} onClick={handleCloseModal}>
              {text.createVerificationModal.goBackButtonName}
            </Button>
          </Paper>
        )}
        {activeStep === steps.length && thirdStep === true && (
          <Box className={classes.footer}>
            <Button className={classes.applyButton} onClick={handleCloseModal}>
              {text.createVerificationModal.applyButtonName}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}
