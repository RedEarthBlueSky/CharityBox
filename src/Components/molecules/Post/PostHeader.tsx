import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../../../Styles'

const PostHeader:React.FC = () => {
  return (
    <View style={styles.rowFlexContainer}>
      <Text style={styles.H4}>Post Header Component Molecule</Text>
    </View>
  )
}

export { PostHeader }