import { View, ScrollView } from 'react-native'
import React from 'react'

import { styles, oStyles} from '../../Styles'
import { PDivider, PDividerBorder } from '../atoms'
import { PostHeader, PostMain, PostFooter } from '../molecules'
import { POSTS, USERS } from '../../Data'

const Posts:React.FC = () => {
  return (
      <ScrollView 
        contentContainerStyle={oStyles.postsContainer}
        persistentScrollbar={false}
      >
        {
          POSTS.map((post, index ) => {
            return ( 
              <View 
                key={index}
                style={oStyles.postContainer}
              >
                <PostHeader 
                  uri={post.profile_picture}
                  user={post.user}
                />
                <PostMain 
                  uri={post.imageURL}
                />
                <PostFooter />
              </View>
            )
          })
        }
      </ScrollView>
  )
}

export { Posts }