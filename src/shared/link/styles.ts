import { type ITheme } from '@/types/theme';
import { ColorVariant } from '@/types/style';

import { tss } from '@/styles/theme';

type LinkStyle =
  | {
      color: string | undefined;
      textDecoration: string;
      textDecorationColor?: undefined;
    }
  | {
      color: string | undefined;
      textDecorationColor: string | undefined;
      textDecoration?: undefined;
    };

function getLinkGeneralStyle(
  theme: ITheme,
  colorVariant: ColorVariant,
  underline: boolean,
): LinkStyle {
  let color;
  switch (colorVariant) {
    case ColorVariant.Primary: {
      color = theme.palette.primary.dark;
      break;
    }
    case ColorVariant.PrimaryLight: {
      color = theme.palette.primary.main;
      break;
    }
    default: {
      color = theme.palette.light.dark;
    }
  }

  return underline
    ? { color, textDecorationColor: color }
    : { color, textDecoration: 'none' };
}

export const useStyles = tss
  .withParams<{ colorVariant: ColorVariant; underline: boolean }>()
  .create(({ theme, colorVariant, underline }) => {
    return {
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        cursor: 'pointer',
      },
      link: {
        ...getLinkGeneralStyle(theme, colorVariant, underline),
      },
    };
  });
