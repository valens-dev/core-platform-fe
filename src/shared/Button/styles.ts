import { tss } from '../../styles/theme'
import { ColorVariant } from '../../models/styles'
import { Theme } from '../../styles/theme'

const getButtonGeneralStyle = (theme: Theme, colorVariant: ColorVariant) => {
  switch (colorVariant) {
    case ColorVariant.Primary:
      return {
        background: theme.palette.primary.dark,
        '&:hover': { background: theme.palette.primary.dark },
      }
    case ColorVariant.Light:
      return {
        '&:hover': {
          background: theme.palette.white.main,
          border: `0.4px solid ${theme.palette.light.grey}`,
        },
      }
    default:
      return {}
  }
}

const useStyles = tss
  .withParams<{ colorVariant: ColorVariant }>()
  .create(({ theme, colorVariant }) => ({
    general: {
      ...getButtonGeneralStyle(theme, colorVariant),
    },
  }))

export default useStyles
