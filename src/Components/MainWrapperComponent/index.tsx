import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../Screens/styles/globalstyles'
//  grab a hold of the context
import themeContext from '../../Screens/styles/themeContext'

type MainWrapperProps = {
  children:  React.ReactNode; //  child prop type
}

const MainWrapperComponent = (props: MainWrapperProps) => {
  return (
    <View style={styles.MainWrapper}>
      {props.children}
    </View>
  )
}

export { MainWrapperComponent }