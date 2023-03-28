import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { aStyles } from '../../Styles'

interface LogoProps  {
  onPress: () => void
}

//  add as a prop?
const logo = '../../../assets/logo.png'

const Logo:React.FC<LogoProps> = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={onPress}
      >
        <Image style={aStyles.logo} source={require(logo)}/>
      </TouchableOpacity>
    </View>
  )
}

export { Logo }