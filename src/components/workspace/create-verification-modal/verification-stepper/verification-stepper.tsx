import { useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import { STEPS } from '../constants';

import { StepperBody } from './stepper-body';
import { ErrorMessageFooter } from './error-message-footer';

import { useStyles } from './styles';

const text = appText.workspacePage;

export function VerificationStepper(): React.ReactNode {
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
      if (activeStep < STEPS.length) {
        setActiveStep((prevActiveStep) => {
          return prevActiveStep + 1;
        });
      }
    }, 2000);

    if (activeStep === STEPS.length - 1) {
      STEPS[2].label =
        thirdStep === true
          ? text.createVerificationModal.textSuccessMessage
          : text.createVerificationModal.textErrorMessage;
    }

    return () => {
      return clearTimeout(timer);
    };
  }, [activeStep, thirdStep]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <StepperBody activeStep={activeStep} thirdStep={thirdStep} />
      {activeStep === STEPS.length && thirdStep === false && (
        <ErrorMessageFooter />
      )}
      {activeStep === STEPS.length && thirdStep === true && (
        <Box className={classes.footer}>
          <Button className={classes.applyButton}>
            {text.createVerificationModal.applyButtonName}
          </Button>
        </Box>
      )}
    </Box>
  );
}
