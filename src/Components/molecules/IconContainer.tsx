import { View, Text } from 'react-native'
import React from 'react'

import { mStyles } from '../../Styles/moleculeStyles'
import { IconButton } from '../atoms'

export interface IconObjectProps {
  iconName: string
  size: number
  color: string
  badge: boolean
}

interface IconDataProps {
  [key:string]: IconObjectProps
}

const IconContainer:React.FC<IconDataProps> = ({iconArray}:IconDataProps) => {
  return (
    <View style={mStyles.iconContainer}>
      {
        iconArray.map((icon:any, index:number) => (
          <IconButton 
            name={icon.iconName}
            size={icon.size}
            color={icon.color}
            badge={icon.badge}
            // Key is not a prop
            key={index}
          />
        ))
      }
    </View>
  )
}

export { IconContainer }