import { View, ScrollView } from 'react-native'
import React from 'react'

import { styles } from '../../Styles'
import { PDivider, PDividerBorder } from '../atoms'
import { PostHeader, PostMain, PostFooter } from '../molecules'
import { POSTS } from '../../Data/postsData'

const Posts:React.FC = () => {
  return (
    <View style={styles.colFlexPost}>
      <PDividerBorder />
      <ScrollView>
        {
          POSTS.map((post, index ) => {
            const { imageURL, user, likes, caption, profile_picture, comments } = post
            return ( 
              <View key={index}>
                <PostHeader />
                <PostMain />
                <PostFooter />
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export { Posts }