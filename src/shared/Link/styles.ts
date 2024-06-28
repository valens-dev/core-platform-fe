import { tss } from '@/styles/theme';

import { ColorVariant } from '@/types/color';

import { ITheme } from '@/types/theme';

const getLinkGeneralStyle = (
  theme: ITheme,
  colorVariant: ColorVariant,
  underline: boolean
) => {
  let color;
  switch (colorVariant) {
    case ColorVariant.Primary:
      color = theme.palette.primary.dark;
      break;
    case ColorVariant.PrimaryLight:
      color = theme.palette.primary.main;
      break;
    default:
      color = theme.palette.light.dark;
  }

  return !underline
    ? { color, textDecoration: 'none' }
    : { color, textDecorationColor: color };
};

const useStyles = tss
  .withParams<{ colorVariant: ColorVariant; underline: boolean }>()
  .create(({ theme, colorVariant, underline }) => ({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      cursor: 'pointer',
    },
    link: {
      ...getLinkGeneralStyle(theme, colorVariant, underline),
    },
  }));

export default useStyles;
