import EStyleSheet from 'react-native-extended-stylesheet'

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
