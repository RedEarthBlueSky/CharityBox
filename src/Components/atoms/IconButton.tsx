import { View, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

import { aStyles } from '../../Styles/atomStyles'

interface IconButtonProps {
  size: number
  name: string
  color: string
  key: number
}

const IconButton:React.FC<IconButtonProps> = ({size, name, color}) => {
  return (
    <View>
      <TouchableOpacity 
        key={name}
      >
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