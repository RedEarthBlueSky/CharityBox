import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

import { StoryUserButton } from '../atoms'
import { oStyles, styles, aStyles } from '../../Styles'
import { USERS } from '../../Data/storiesOrgData'

const Stories:React.FC = () => {
  return (
    <View style={aStyles.storyScrollWrapper}>
      <ScrollView style={aStyles.scrollviewWrapper}>
          <ScrollView 
            alwaysBounceHorizontal
            contentContainerStyle={aStyles.storyContainer}
            horizontal
            persistentScrollbar={true}
          >
            {
              USERS.map((story, index) => (
                <StoryUserButton 
                  uri={story.image}
                  id={'storyItem'}
                  onPress={() => console.log(`${story.user} was Pressed!`)}
                  keyID={index}
                  user={story.user}
                />
              ))
            }
          </ScrollView>
      </ScrollView>
    </View>
  )
}

export { Stories }