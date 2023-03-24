import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import { StoryUserButton, ScrollViewHorizontal } from '../atoms'
import { oStyles, styles, aStyles } from '../../Styles'
import { USERS } from '../../Data/storiesOrgData'

const Stories:React.FC = () => {
  return (
    <View style={[aStyles.storyScrollWrapper]}>
      <ScrollViewHorizontal>
          {
            USERS.map((story, index) => (
              <StoryUserButton 
                uri={story.image}
                id={'storyItem'}
                onPress={() => console.log(`${story.user} was Pressed!`)}
                //  key is not a property
                key={index}
                user={story.user}
              />
            ))
          }
      </ScrollViewHorizontal>
    </View>
  )
}

export { Stories }