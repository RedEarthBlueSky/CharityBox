import { View, Text } from 'react-native'
import React from 'react'

import { mStyles } from '../../Styles'
import { IconButton } from '../atoms'

export interface IconObjectProps {
  iconName: string
  size: number
  color: string
  badge: boolean
  unread: number
  onPress: () => void
}

interface IconDataProps {
  [key:string]: IconObjectProps
}

const IconContainer:React.FC<IconDataProps> = ({iconArray, onPress}:IconDataProps) => {
  return (
    <View style={mStyles.iconContainer}>
      {
        iconArray.map((icon:any, index:number) => (
          <IconButton 
            name={icon.iconName}
            size={icon.size}
            color={icon.color}
            badge={icon.badge}
            unread={icon.unread}
            onPress={icon.onPress}
            // Key is not a prop
            key={index}
          />
        ))
      }
    </View>
  )
}

export { IconContainer }