import React from 'react'
import { TouchableOpacity, View, ActivityIndicator, Text } from 'react-native'

import getStyles from './ds-button.style'

export type DSButtonProps = {
  title: string,
  size?: 'small' | 'medium' | 'large',
  variant?: 'contained' | 'outlined',
  color?: 'primary' | 'secondary' | 'destructive',
  loading?: boolean,
  disabled?: boolean,
}

const defaultProps = {
  size: 'small',
  variant: 'contained',
  color: 'primary',
  loading: false,
  disabled: false,
}

export function DSButton({
  title,
  size = 'small',
  variant = 'contained',
  color = 'primary',
  loading,
  disabled = false,
}: DSButtonProps) {
  const styles = getStyles(color, size, disabled)

  console.log(styles)

  const touchableStyle = [
    styles.button,
    styles[variant],
  ]

  const textStyle = [
    styles[`${variant}Text`],
    loading && styles.loadingText,
  ]

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity style={touchableStyle}>
        {loading && <ActivityIndicator color={styles[`${variant}Text`]?.color} />}
        {/* <GPAText textKey={title} style={textStyle} semiBold /> */}
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

DSButton.defaultProps = defaultProps

// TODO
// - Aplicar tamanho de fonte
