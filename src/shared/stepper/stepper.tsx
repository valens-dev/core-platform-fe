import {
  Step,
  StepLabel,
  Typography,
  StepContent,
  Stepper as MuiStepper,
} from '@mui/material';

import { useStyles } from './styles';

enum StepNumber {
  FirstStep = 1,
  SecondStep = 2,
  ThirdStep = 3,
}
interface IStepper {
  activeStep: number;
  isLastStepSuccessful: boolean;
  steps: {
    label: string;
    description: string;
  }[];
}

function checkErrorCondition(
  isLastStepSuccessful: boolean,
  activeStep: number,
  index: number,
): boolean {
  return (
    isLastStepSuccessful === false &&
    activeStep === (StepNumber.ThirdStep as number) &&
    index === (StepNumber.SecondStep as number)
  );
}

function shouldHideText(
  isLastStepSuccessful: boolean,
  activeStep: number,
  index: number,
): boolean {
  return (
    isLastStepSuccessful === false &&
    activeStep === (StepNumber.ThirdStep as number) &&
    index === (StepNumber.SecondStep as number)
  );
}

export function Stepper({
  activeStep,
  isLastStepSuccessful,
  steps,
}: IStepper): React.ReactNode {
  const { classes } = useStyles();

  return (
    <MuiStepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => {
        const labelProps: {
          error?: boolean;
        } = {};
        if (checkErrorCondition(isLastStepSuccessful, activeStep, index)) {
          labelProps.error = true;
        }
        return (
          <Step key={step.label}>
            <StepLabel {...labelProps} className={classes.textItemTitle}>
              {step.label}
              <Typography
                className={
                  shouldHideText(isLastStepSuccessful, activeStep, index)
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
    </MuiStepper>
  );
}
