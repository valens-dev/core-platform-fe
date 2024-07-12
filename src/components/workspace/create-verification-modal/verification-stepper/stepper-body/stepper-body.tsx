import { CustomStepper } from '@/shared/stepper';

interface IStepperBodyProps {
  activeStep: number;
  isLastStepSuccessful: boolean;
  steps: {
    label: string;
    description: string;
  }[];
}

export function StepperBody({
  activeStep,
  isLastStepSuccessful,
  steps,
}: IStepperBodyProps): React.ReactNode {
  return (
    <CustomStepper
      activeStep={activeStep}
      isLastStepSuccessful={isLastStepSuccessful}
      steps={steps}
    />
  );
}
