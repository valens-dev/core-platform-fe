import { Step, Stepper } from '@mui/material';

import { StepperBodyItem } from '@/components/workspace/create-verification-modal/verification-stepper/stepper-body/stepper-body-item';

enum StepNumber {
  FirstStep = 1,
  SecondStep = 2,
  ThirdStep = 3,
}

interface ICustomStepper {
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

export function CustomStepper({
  activeStep,
  isLastStepSuccessful,
  steps,
}: ICustomStepper): React.ReactNode {
  return (
    <Stepper activeStep={activeStep} orientation="vertical">
      {steps.map((step, index) => {
        const labelProps: {
          error?: boolean;
        } = {};
        if (checkErrorCondition(isLastStepSuccessful, activeStep, index)) {
          labelProps.error = true;
        }
        return (
          <Step key={step.label}>
            <StepperBodyItem
              step={step}
              labelProps={labelProps}
              activeStep={activeStep}
              isLastStepSuccessful={isLastStepSuccessful}
              index={index}
            />
          </Step>
        );
      })}
    </Stepper>
  );
}
