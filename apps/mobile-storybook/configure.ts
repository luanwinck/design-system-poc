import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors, Fonts, Borders } from '@design-system-poc/tokens'

EStyleSheet.build({
  ...Colors.pa,
  ...Fonts.pa,
  ...Borders.pa,
});