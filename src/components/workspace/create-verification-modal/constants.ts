import { appText } from '@/constants/strings';

const { createVerificationModal: text } = appText.workspacePage;

export const STEPS = [
  {
    label: text.firstTextItemTitle,
    description: text.textItemDescription,
  },
  {
    label: text.secondTextItemTitle,
    description: text.textItemDescription,
  },
  {
    label: text.thirdTextItemTitle,
    description: text.textItemDescription,
  },
];
