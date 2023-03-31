import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../../../Styles'


const PostFooter:React.FC = () => {
  return (
    <View style={styles.rowFlexContainer}>
      <Text style={styles.H4}>Post Footer Component Molecule</Text>
    </View>
  )
}

export { PostFooter }