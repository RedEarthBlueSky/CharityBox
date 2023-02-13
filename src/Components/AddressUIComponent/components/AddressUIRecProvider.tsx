//  AddressUIRecProvider
//  UI to show selected address and allow user to edit/enter manually
import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../Screens/styles/globalstyles'

const AddressUIRecProvider = () => {
  return (
    <View>
      <Text style={styles.H3Bold}>Address UI Rec Provider</Text>
      <Text style={styles.H4}>Store for shared address information</Text>
    </View>
  )
}

export { AddressUIRecProvider }