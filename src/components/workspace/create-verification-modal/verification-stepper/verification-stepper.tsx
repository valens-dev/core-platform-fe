import { useState, useEffect } from 'react';

import {
  Box,
  Step,
  Stepper,
  StepLabel,
  Typography,
  StepContent,
} from '@mui/material';

import { Button } from '@/shared/button';

import { appText } from '@/constants/strings';

import { STEPS } from '../constants';

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
      <Stepper activeStep={activeStep} orientation="vertical">
        {STEPS.map((step, index) => {
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
