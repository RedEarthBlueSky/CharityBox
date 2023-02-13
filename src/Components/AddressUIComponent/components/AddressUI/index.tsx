//  AddressUI
//  UI to show selected address and allow user to edit/enter manually
import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../../../Screens/styles/globalstyles'

const AddressUI = () => {
  return (
    <View>
      <Text style={styles.H3Bold}>Address UI</Text>
      <Text style={styles.H4}>UI to show selected address and allow user to edit/enter manually</Text>
    </View>
  )
}

export { AddressUI }