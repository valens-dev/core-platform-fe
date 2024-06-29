import { type ITheme } from '@/types/theme';
import { ButtonStyle, ColorVariant } from '@/types/style';

import { tss } from '@/styles/theme';

const getButtonGeneralStyle = (
  theme: ITheme,
  colorVariant: ColorVariant,
): ButtonStyle => {
  switch (colorVariant) {
    case ColorVariant.Primary:
      return {
        background: theme.palette.primary.dark,
        '& > p, span': {
          color: theme.palette.light.main,
        },
        '&:hover': { background: theme.palette.primary.dark },
      };
    case ColorVariant.PrimaryLight:
      return {
        background: theme.palette.primary.main,
        '& > p, span': {
          color: theme.palette.light.main,
        },
        '&:hover': { background: theme.palette.primary.main },
      };
    case ColorVariant.Light:
      return {
        background: theme.palette.white.main,
        border: `1px solid ${theme.palette.primary.dark}`,
        '& > p, span': {
          color: theme.palette.primary.dark,
        },
        '&:hover': {
          background: theme.palette.white.main,
          border: `1px solid ${theme.palette.primary.dark}`,
        },
      };
    default:
      return {};
  }
};

const useStyles = tss
  .withParams<{ colorVariant: ColorVariant }>()
  .create(({ theme, colorVariant }) => ({
    general: {
      ...getButtonGeneralStyle(theme, colorVariant),
    },
  }));

export default useStyles;
