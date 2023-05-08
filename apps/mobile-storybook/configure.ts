import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors, Fonts, Borders } from '@design-system-poc/tokens'

EStyleSheet.build({
  ...Colors,
  ...Fonts,
  ...Borders,
});