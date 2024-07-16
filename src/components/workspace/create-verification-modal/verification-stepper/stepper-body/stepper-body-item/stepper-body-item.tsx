import { Box, StepLabel, Typography, StepContent } from '@mui/material';

import { useStyles } from './styles';

enum StepNumber {
  FirstStep = 1,
  SecondStep = 2,
  ThirdStep = 3,
}

interface IStepperBodyProps {
  step: { label: string; description: string };
  labelProps: { optional?: React.ReactNode; error?: boolean };
  activeStep: number;
  isLastStepSuccessful: boolean;
  index: number;
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

export function StepperBodyItem({
  step,
  labelProps,
  activeStep,
  isLastStepSuccessful,
  index,
}: IStepperBodyProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box>
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
    </Box>
  );
}
