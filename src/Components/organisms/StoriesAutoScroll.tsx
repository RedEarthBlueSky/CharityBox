import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import { StoryUserButton } from '../atoms'
import { aStyles } from '../../Styles'
import { USERS } from '../../Data/storiesOrgData'

const getUsers = () => {
  return USERS.map((story, index) => (
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

const StoriesAutoScroll:React.FC = () => {
  return (
    <View style={{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',

    }}
    >
      <AutoScroll
        style={{
          backgroundColor: 'red',
          width: '90%',
          padding: 10,
          margin: 0,
          marginBottom: 10,
        }}
        duration={10}
        endPaddingWidth={0}
      >
        <View>
          <Image 
            source={{uri: 'https://static.wikia.nocookie.net/cyberpunk/images/8/8c/Panam_Palmer_Infobox_CP2077.png/revision/latest?cb=20201230063640'}}
            style={{
              height: 100,
              width: 100,
            }}
        />
        </View>
      </AutoScroll>
    </View>
  )
}

export { StoriesAutoScroll }