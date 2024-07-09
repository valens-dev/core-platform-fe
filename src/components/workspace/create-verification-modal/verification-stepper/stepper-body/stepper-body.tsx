import { Step, Stepper } from '@mui/material';

import { STEPS } from '../../constants';

import { StepperBodyItem } from './stepper-body-item';

interface IStepperBodyProps {
  activeStep: number;
  thirdStep: boolean;
}

export function StepperBody({
  activeStep,
  thirdStep,
}: IStepperBodyProps): React.ReactNode {
  return (
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
            <StepperBodyItem
              step={step}
              labelProps={labelProps}
              activeStep={activeStep}
              thirdStep={thirdStep}
              index={index}
            />
          </Step>
        );
      })}
    </Stepper>
  );
}
