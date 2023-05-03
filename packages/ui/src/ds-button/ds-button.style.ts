import { StyleSheet } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build({
  "$neutralColorLowPure": "#000000",
  "$neutralColorLowLight": "#8E9199",
  "$neutralColorLowMedium": "#5E6066",
  "$neutralColorLowDark": "#2D2E33",
  "$neutralColorHighPure": "#FFFFFF",
  "$neutralColorHighLight": "#F2F4F7",
  "$neutralColorHighMedium": "#E4E5EB",
  "$neutralColorHighDark": "#C0C3CC",
  "$neutralColorOpacityLowDarkSemiOpaque": "rgba(45, 46, 51, 0.72)",
  "$neutralColorOpacityLowDarkIntense": "rgba(45, 46, 51, 0.56)",
  "$neutralColorOpacityLowDarkMedium": "rgba(45, 46, 51, 0.32)",
  "$neutralColorOpacityLowDarkLight": "rgba(45, 46, 51, 0.16)",
  "$neutralColorOpacityLowDarkSemiTransparent": "rgba(45, 46, 51, 0.08)",
  "$neutralColorOpacityHighLightSemiOpaque": "rgba(242, 244, 247, 0.72)",
  "$neutralColorOpacityHighLightIntense": "rgba(242, 244, 247, 0.56)",
  "$neutralColorOpacityHighLightMedium": "rgba(242, 244, 247, 0.32)",
  "$neutralColorOpacityHighLightLight": "rgba(242, 244, 247, 0.16)",
  "$neutralColorOpacityHighLightSemiTransparent": "rgba(242, 244, 247, 0.08)",
  "$brandColorPrimaryPure": "#288542",
  "$brandColorPrimaryLight": "#CFFAC8",
  "$brandColorPrimaryMedium": "#63B85E",
  "$brandColorPrimaryDark": "#00652E",
  "$brandColorSecondaryPure": "#8DC63F",
  "$brandColorSecondaryLight": "#DEF5BF",
  "$brandColorSecondaryMedium": "#ABD66F",
  "$brandColorSecondaryDark": "#77AD2D",
  "$categoryColorMyDiscountPure": "#3EBDAC",
  "$categoryColorFidelityFirstPure": "#3EBDAC",
  "$categoryColorFidelityFirstLight": "#BFF5EE",
  "$categoryColorFidelityFirstMedium": "#76D6C9",
  "$categoryColorFidelityFirstDark": "#1D9988",
  "$categoryColorFidelitySecondPure": "#9E945C",
  "$categoryColorFidelitySecondLight": "#D9D2AD",
  "$categoryColorFidelitySecondMedium": "#80753C",
  "$categoryColorFidelitySecondDark": "#615722",
  "$categoryColorFidelityThirdPure": "#000000",
  "$categoryColorFidelityThirdLight": "#8E9199",
  "$categoryColorFidelityThirdMedium": "#5E6066",
  "$categoryColorFidelityThirdDark": "#2D2E33",
  "$categoryColorStixPure": "#9341F1",
  "$categoryColorStixLight": "#D0AAFD",
  "$categoryColorStixMedium": "#631BB6",
  "$categoryColorStixDark": "#16074A",
  "$categoryColorMarketplacePure": "#009FE3",
  "$categoryColorMarketplaceLight": "#C2EDFF",
  "$categoryColorMarketplaceMedium": "#337AB7",
  "$categoryColorMarketplaceDark": "#1B4873",
  "$highlightColorPure": "#FAB914",
  "$highlightColorLight": "#FFF0C2",
  "$highlightColorMedium": "#FFCE47",
  "$highlightColorDark": "#EB981C",
  "$feedbackColorPositivePure": "#288542",
  "$feedbackColorPositiveLight": "#CFFAC8",
  "$feedbackColorPositiveMedium": "#62B85E",
  "$feedbackColorPositiveDark": "#00652E",
  "$feedbackColorDestructivePure": "#BE0013",
  "$feedbackColorDestructiveLight": "#FFC2C8",
  "$feedbackColorDestructiveMedium": "#F54556",
  "$feedbackColorDestructiveDark": "#8F000E",
  "$fontSizeQuarck": 10,
  "$fontSizeNano": 11,
  "$fontSizeXXXS": 13,
  "$fontSizeXXS": 15,
  "$fontSizeXS": 18,
  "$fontSizeSM": 21,
  "$fontSizeMD": 24,
  "$fontSizeLG": 32,
  "$fontSizeXL": 40,
  "$fontSizeXXL": 48,
  "$fontSizeXXXL": 64,
  "$borderWidthNone": 0,
  "$borderWidthHairline": 1,
  "$borderWidthThin": 2,
  "$borderWidthThick": 4,
  "$borderWidthHeavy": 8,
  "$borderRadiusNone": 0,
  "$borderRadiusXS": 2,
  "$borderRadiusSM": 4,
  "$borderRadiusMD": 8,
  "$borderRadiusLG": 12,
  "$borderRadiusXL": 16,
  "$borderRadiusPill": 500
});

const getPalette = (color: string, disabled: boolean) => {
  if (disabled) {
    return { mainColor: '$neutralColorOpacityLowDarkLight', accentColor: '$neutralColorHighPure' }
  }
  switch (color) {
    case 'secondary':
      return { mainColor: '$brandColorSecondaryPure', accentColor: '$neutralColorHighPure' }
    case 'destructive':
      return { mainColor: '$feedbackColorDestructivePure', accentColor: '$neutralColorHighPure' }
    case 'primary':
    default:
      return { mainColor: '$brandColorPrimaryPure', accentColor: '$neutralColorHighPure' }
  }
}

const getButton = (size: string) => {
  switch (size) {
    case 'small':
      return { height: 32, borderRadius: 16, paddingHorizontal: 16 }
    case 'medium':
      return { height: 40, borderRadius: 20, paddingHorizontal: 16 }
    case 'large':
    default:
      return { height: 48, borderRadius: 24, paddingHorizontal: 24 }
  }
}

const getFontSize = (size: string) => {
  switch (size) {
    case 'small':
      return 14
    case 'medium':
      return 14
    case 'large':
    default:
      return 16
  }
}

export default (color: string, size: string, disabled: boolean) => {
  const { mainColor, accentColor } = getPalette(color, disabled)
  const buttonSize = getButton(size)
  const fontSize = getFontSize(size)

  return EStyleSheet.create({
    // Button defaults
    button: {
      ...buttonSize,
      justifyContent: 'center',
    },

    // Text defaults
    text: {
      fontSize,
    },

    // Button variants
    contained: {
      backgroundColor: mainColor,
    },
    outlined: {
      borderWidth: 1,
      borderColor: mainColor,
      backgroundColor: 'transparent',
    },

    // Text variants
    containedText: {
      color: accentColor,
    },
    outlinedText: {
      color: mainColor,
    },

    // Text conditions
    loadingText: {
      // backgroundColor: 'blue',
      color: 'transparent',
      marginBottom: -(buttonSize.height / 2),
    },

    // Spinner variants
    containedSpinner: {
      color: accentColor,
    },
    outlinedSpinner: {
      color: mainColor,
    },
  })
}
