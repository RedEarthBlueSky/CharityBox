import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from '../../../Styles'


const PostHeader:React.FC = () => {
  return (
    <View style={styles.rowFlexContainer}>
      <View>
        <Image source={{uri: ''}}/>
        <Text style={styles.H4}>Post Header Component Molecule</Text>
      </View>
    </View>
  )
}

export { PostHeader }