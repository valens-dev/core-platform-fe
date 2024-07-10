import { Step, Stepper } from '@mui/material';

import { StepNumber } from '@/types/stepper';

import { STEPS } from '../../constants';

import { StepperBodyItem } from './stepper-body-item';

interface IStepperBodyProps {
  activeStep: number;
  lastStep: boolean;
}

function applyErrorCondition(
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

export function StepperBody({
  activeStep,
  lastStep,
}: IStepperBodyProps): React.ReactNode {
  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {STEPS.map((step, index) => {
        const labelProps: {
          optional?: React.ReactNode;
          error?: boolean;
        } = {};
        if (applyErrorCondition(lastStep, activeStep, index)) {
          labelProps.error = true;
        }
        return (
          <Step key={step.label}>
            <StepperBodyItem
              step={step}
              labelProps={labelProps}
              activeStep={activeStep}
              lastStep={lastStep}
              index={index}
            />
          </Step>
        );
      })}
    </Stepper>
  );
}
