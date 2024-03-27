interface FontWeights {
  extraLight: number
  light: number
  regular: number
  medium: number
  semiBold: number
  bold: number
  extraBold: number
  black: number
}

interface TypographyType {
  fontWeight: number
  fontSize: string
  lineHeight: string
}

export interface Typography {
  fontFamily: string
  fontWeight: FontWeights
  body1: TypographyType
}
