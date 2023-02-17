
import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../Screens/styles/globalstyles'
//  grab a hold of the context
import themeContext from '../../Screens/styles/themeContext'

type ScreenWrapperProps = {
  children:  React.ReactNode; //  child prop type
}

const ScreenWrapperComponent:React.FC<ScreenWrapperProps> = (props: ScreenWrapperProps) => {
  return (
    <View style={styles.MainWrapper}>
      {props.children}
    </View>
  )
}

export { ScreenWrapperComponent }