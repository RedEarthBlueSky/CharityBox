import { View, Text } from 'react-native'
import React from 'react'

import { AddressUIComponent } from '../Components'
import styles from './styles/globalstyles'

const RegisterScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Register Screen</Text>
      <AddressUIComponent />
    </View>
  )
}

export { RegisterScreen }