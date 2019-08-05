/** @format */

export type TColor = 'primary' | 'secondary' | 'third' | 'default' | 'inherit'

interface IHexColors {
  primary: string
  secondary: string
  third: string
  default: string
  textColor: string
  background: string
  inherit: string
}

export interface ITheme {
  fontSizes: Array<Number>
  paddings: Array<Number>
  colors: IHexColors
  space: Array<Number>
  shadows: any
  breakpoints: string[]
  device: any
}
