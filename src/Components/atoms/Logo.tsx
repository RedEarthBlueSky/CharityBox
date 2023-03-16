import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { aStyles } from '../../Styles/atomStyles'

interface LogoProps  {
  onPress: () => void
}

const Logo:React.FC<LogoProps> = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={onPress}
      >
        <Image style={aStyles.logo} source={require('../../../assets/logo.png')}/>
      </TouchableOpacity>
    </View>
  )
}

export { Logo }