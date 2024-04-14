import { tss } from '@styles/theme'

import { ColorVariant } from '@models/styles'

import { Theme } from '@utils/interfaces'

const getLinkGeneralStyle = (
  theme: Theme,
  colorVariant: ColorVariant,
  underline: boolean
) => {
  let color
  switch (colorVariant) {
    case ColorVariant.Primary:
      color = theme.palette.primary.dark
      break
    default:
      color = theme.palette.light.dark
  }

  if (!underline) return { color, textDecoration: 'none' }

  return { color, textDecorationColor: color }
}

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
  }))

export default useStyles
