import { default as ColorsPA } from './pa/colors'
import { default as FontsPA } from './pa/fonts'
import { default as BordersPA } from './pa/borders'

import { default as ColorsEX } from './ex/colors'
import { default as FontsEX } from './ex/fonts'
import { default as BordersEX } from './ex/borders'

const Colors = {
  pa: ColorsPA,
  ex: ColorsEX,
}

const Fonts = {
  pa: FontsPA,
  ex: FontsEX,
}

const Borders = {
  pa: BordersPA,
  ex: BordersEX,
}

export {
  Colors,
  Fonts,
  Borders,
}