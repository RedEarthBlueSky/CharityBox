import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../../Screens/styles/globalstyles'
import { LineBreakComponent } from '../../LineBreakComponent'

//  Search postcode box and button component
const SPLSearch = () => {
  return (
    <View>
      <LineBreakComponent />
      <Text style={styles.H3Bold}>SPLSearch Component</Text>
      <Text style={styles.H4}>Search Postcode Form Component</Text>
      <Text style={styles.H4}>Search Button Component</Text>
      <LineBreakComponent />
    </View>
  )
}

export { SPLSearch }