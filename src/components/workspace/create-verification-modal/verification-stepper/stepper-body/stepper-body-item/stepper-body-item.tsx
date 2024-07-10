import { Box, StepLabel, Typography, StepContent } from '@mui/material';

import { StepNumber } from '@/types/stepper';

import { useStyles } from './styles';

interface IStepperBodyProps {
  step: { label: string; description: string };
  labelProps: { optional?: React.ReactNode; error?: boolean };
  activeStep: number;
  lastStep: boolean;
  index: number;
}

function shouldHideText(
  lastStep: boolean,
  activeStep: number,
  index: number,
): boolean {
  return (
    lastStep === false &&
    activeStep === (StepNumber.ThirdStep as number) &&
    index === (StepNumber.SecondStep as number)
  );
}

export function StepperBodyItem({
  step,
  labelProps,
  activeStep,
  lastStep,
  index,
}: IStepperBodyProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box>
      <StepLabel {...labelProps} className={classes.textItemTitle}>
        {step.label}
        <Typography
          className={
            shouldHideText(lastStep, activeStep, index)
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
