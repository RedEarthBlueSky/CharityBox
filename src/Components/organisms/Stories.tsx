import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

import { oStyles, styles, aStyles } from '../../Styles'
import { storiesDummyData } from '../../Data/storiesOrgData'

const Stories:React.FC = () => {
  const [storiesData, setStoriesData] = useState<Array<any>>([])
  useEffect(() => {
  }, [])

  return (
    <View style={aStyles.storyScrollWrapper}>
      <ScrollView 
        horizontal
        alwaysBounceHorizontal
        contentContainerStyle={aStyles.storyContainer}
      >
        {
          storiesDummyData.map((story, index) => (
            <View key={index}>
              <Image 
                style={aStyles.storyItemWrapper} 
                source={{uri: story.imageURL}}
              />
              <Text style={aStyles.storyItemText}>{story.name}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export { Stories }