import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { aStyles } from '../../Styles'

//  this component design is so we can have a seperate 
//  background color but keep the scroll bar
const ScrollViewHorizontal = ({children}:any) => {
  return (
    <ScrollView 
      style={[aStyles.scrollviewWrapper]}
    >
      <ScrollView 
        alwaysBounceHorizontal
        contentContainerStyle={aStyles.storyContainer}
        horizontal
        persistentScrollbar={true}
      >
        {children}
        </ScrollView>
    </ScrollView>
  )
}

export { ScrollViewHorizontal }