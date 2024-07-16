import { useMemo, useState, useEffect } from 'react';

import { Box } from '@mui/material';

import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import { STEPS } from '../constants';

import { StepperBody } from './stepper-body';
import { ErrorMessageFooter } from './error-message-footer';

import { useStyles } from './styles';

const { createVerificationModal: text } = appText.workspacePage;

export function VerificationStepper(): React.ReactNode {
  const { classes } = useStyles();

  const [activeStep, setActiveStep] = useState(0);

  const isLastStepSuccessful = useMemo(() => {
    return Math.random() < 0.5;
  }, []);

  const displayErrorMessage =
    activeStep === STEPS.length && isLastStepSuccessful === false;
  const displayApplyButton =
    activeStep === STEPS.length && isLastStepSuccessful === true;

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
        isLastStepSuccessful === true
          ? text.textSuccessMessage
          : text.textErrorMessage;
    }

    return () => {
      return clearTimeout(timer);
    };
  }, [activeStep, isLastStepSuccessful]);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <StepperBody
        activeStep={activeStep}
        isLastStepSuccessful={isLastStepSuccessful}
        steps={STEPS}
      />
      {displayErrorMessage ? <ErrorMessageFooter /> : undefined}
      {displayApplyButton ? (
        <Box className={classes.footer}>
          <Button className={classes.applyButton}>
            {text.applyButtonName}
          </Button>
        </Box>
      ) : undefined}
    </Box>
  );
}
