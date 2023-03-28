import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { aStyles } from '../../../Styles'
import { checkUsernameLength } from '../../../Utils/Atoms'
import { StoryUserButtonProps } from '../../../Props/Atoms'

const StoryScrollButton:React.FC<StoryUserButtonProps> = (props:StoryUserButtonProps) => {
  const { uri, id, onPress, user } = props
  return (
    <View id={id}>
      <TouchableOpacity onPress={() => console.log(`${user} was Pressed!`)}>
        <Image style={aStyles.storyItemImage} source={{uri}}/>
        <Text style={aStyles.storyScrollText}>
          {checkUsernameLength(user, 10)}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export {StoryScrollButton}