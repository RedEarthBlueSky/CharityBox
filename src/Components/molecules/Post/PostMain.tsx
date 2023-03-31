import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../../../Styles'


const PostMain:React.FC = () => {
  return (
    <View style={styles.rowFlexContainer}>
      <Text style={styles.H4}>Post Main Component Molecule</Text>
    </View>
  )
}

export { PostMain }