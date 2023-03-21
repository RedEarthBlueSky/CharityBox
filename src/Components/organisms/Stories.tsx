import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { oStyles, styles, aStyles } from '../../Styles'
import { USERS } from '../../Data/storiesOrgData'

const Stories:React.FC = () => {
  const [storiesData, setStoriesData] = useState<Array<any>>([])
  useEffect(() => {
  }, [])
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
              USERS.map((user, index) => (
                <View key={index} id={'storyElement'}>
                  <TouchableOpacity onPress={() => console.log(`${user.user} was Pressed!`)}>
                    <Image style={aStyles.storyItemImage} source={{uri: user.image}}/>
                    <Text style={aStyles.storyItemText}>{user.user}</Text>
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView>
      </ScrollView>
      <Text style={styles.H2bold}>Stories</Text>
    </View>
  )
}

export { Stories }