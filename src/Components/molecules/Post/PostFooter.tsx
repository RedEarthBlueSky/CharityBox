import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../../../Styles'
import { IconContainer } from '../IconContainer'
import { postFooterIcons } from '../../../Data'

interface PostFooterProps {
  width: number
}

const PostFooter:React.FC<PostFooterProps> = ({width}) => {
  return (
    <View style={styles.rowFlexContainer}>
      <IconContainer iconArray={postFooterIcons} width={90}/>
    </View>
  )
}

export { PostFooter }