import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles, oStyles } from '../../../Styles'

interface PostHeaderProps {
  uri: string
  user: string
}

const PostHeader:React.FC<PostHeaderProps> = ({
  uri,
  user,
}) => {
  return (
    <View style={oStyles.postHeaderRowContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image 
          source={{uri}}
          style={oStyles.postHeaderProfileImage}
        />
        <Text style={styles.Pbold}>{user}</Text>
      </View>
      <Text style={styles.Pbold}>...</Text>
    </View>
  )
}

export { PostHeader }