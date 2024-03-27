import { tss } from '../../styles/theme'
import { ColorVariant } from '../../models/styles'
import { Theme } from '../../styles/config/theme'

const getHoverStyle = (theme: Theme, colorVariant: ColorVariant) => {
  switch (colorVariant) {
    case ColorVariant.Primary:
      return { background: theme.palette.primary.dark }
    case ColorVariant.Light:
      return { background: theme.palette.light.main }
  }
}

const useStyles = tss
  .withParams<{ colorVariant: ColorVariant }>()
  .create(({ theme, colorVariant }) => ({
    general: {
      boxShadow: 'none',
      '&:hover': {
        ...getHoverStyle(theme, colorVariant),
      },
    },
  }))

export default useStyles
