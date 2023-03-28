import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

import { aStyles } from '../../../Styles'

interface IconButtonProps {
  size: number
  name: string
  color: string
  badge: boolean
  unread: number
  onPress: () => void
}

const IconButton:React.FC<IconButtonProps> = (
  {size, name, color, badge, unread, onPress }
  ) => {
  return (
    <View>
      <TouchableOpacity 
        key={name}
        onPress={onPress}
      >
        {/* badge is true and unread does not equal 0 */}
        {badge && unread ?
        <View style={aStyles.unreadBadge}>
            <Text style={aStyles.unreadBadgeText}>{unread}</Text>
        </View>
        : null
        }
        {<Icon 
          name={name} 
          size={size} 
          color={color} 
        />}
      </TouchableOpacity>
    </View>
  )
}

export { IconButton }