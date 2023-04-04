import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

import { aStyles } from '../../../Styles'
import { IconButtonProps } from '../../../Props/Molecules'

const IconButton:React.FC<IconButtonProps> = (
  {label, size, iconName, color, badge, unread, onPress }
  ) => {
  return (
    <View>
      <TouchableOpacity 
        key={iconName}
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
          name={iconName} 
          size={size} 
          color={color} 
        />}
        {/* a label has been provided */}
        {label ?
          <Text>{label}</Text>
          : null
        }
      </TouchableOpacity>
    </View>
  )
}

export { IconButton }