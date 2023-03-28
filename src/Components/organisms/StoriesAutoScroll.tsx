import { View, Text } from 'react-native'
import React from 'react'

import { oStyles, styles } from '../../Styles'
import { AutoScroll, StoryScrollButton } from '../atoms'
import { USERS } from './../../Data/storiesOrgData'


const StoriesAutoScroll = () => {
  return (
    <AutoScroll
    style={oStyles.autoScrollingContainer}
    duration={30000}
    isLTR={false}
  > 
  <View style={[styles.rowFlexContainer, {alignSelf: 'center'}]}>
    {
    USERS.map((story, index) => (
        <StoryScrollButton 
          uri={story.image}
          id={'storyItem'}
          onPress={() => console.log(`${story.user} was Pressed!`)}
          //  key is not a property
          key={index}
          user={story.user}
        />
      ))
    }
  </View>        
  </AutoScroll >
  )
}

export {StoriesAutoScroll}