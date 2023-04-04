import { View, Text, Image } from 'react-native'
import React from 'react'

import { styles } from '../../../Styles'

interface PostMainProps {
  uri: string
}


const PostMain:React.FC<PostMainProps> = ({uri}) => {
  return (
    <View>
      <Image source={{uri}} style={{width: '100%', height: 200}}/>
    </View>
  )
}

export { PostMain }