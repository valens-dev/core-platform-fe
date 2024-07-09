import { Box, StepLabel, Typography, StepContent } from '@mui/material';

import { useStyles } from './styles';

interface IStepperBodyProps {
  step: { label: string; description: string };
  labelProps: { optional?: React.ReactNode; error?: boolean };
  activeStep: number;
  thirdStep: boolean;
  index: number;
}

export function StepperBodyItem({
  step,
  labelProps,
  activeStep,
  thirdStep,
  index,
}: IStepperBodyProps): React.ReactNode {
  const { classes } = useStyles();

  return (
    <Box>
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
    </Box>
  );
}
