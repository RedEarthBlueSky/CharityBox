import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../../Styles'
import { PDivider } from '../atoms'
import { PostHeader, PostMain, PostFooter } from '../molecules'


const Post:React.FC = () => {
  return (
    <View style={styles.colFlex}>
      <PDivider />
      <Text style={styles.H3bold}>Post Component Organism</Text>
      <PostHeader/>
      <PostMain />
      <PostFooter />
    </View>
  )
}

export { Post }