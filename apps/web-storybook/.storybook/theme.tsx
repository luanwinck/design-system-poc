import React, { useState } from 'react'
import { Borders, Colors, Fonts } from "@design-system-poc/tokens"
import { useEffect } from "react"
import EStyleSheet from "react-native-extended-stylesheet"

export const BrandContext = React.createContext({});
const BrandProvider = BrandContext.Provider;

export const withTheme = (Story, context) => {
  const [currentTheme, setCurrentTheme] = useState(context.globals.theme)

  useEffect(() => {
    console.log(context.globals.theme)
    const newColor = context.globals.theme === 'pa' ? 'green' : 'red'

    const brand = context.globals.theme

    EStyleSheet.build({
      ...Colors[brand],
      ...Fonts[brand],
      ...Borders[brand],
    })

    setCurrentTheme(context.globals.theme)
  }, [context.globals.theme])


  return (
    <BrandProvider value={currentTheme}>
      <Story />
    </BrandProvider>
  )
}