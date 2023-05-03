import EStyleSheet from 'react-native-extended-stylesheet'
import { Colors, Fonts, Borders } from '@gpa-design-system-poc/tokens'

EStyleSheet.build({
  ...Colors,
  ...Fonts,
  ...Borders,
});