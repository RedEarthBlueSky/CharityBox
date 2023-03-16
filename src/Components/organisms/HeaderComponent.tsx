//  HEADER COMPONENT
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import { IconContainer } from '../molecules'
import { headerIconsArray } from '../../Data/organismData'
import { styles } from '../../Styles/styles'

const HeaderComponent:React.FC = () => {
  return (
    <View style={styles.rowFlexContainer}>   
      {/* Logo     */}
      <TouchableOpacity onPress={() => console.log('Logo hit!')}>
        <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
      </TouchableOpacity>
      <View style={styles.colFlex} >
        <Text style={styles.H3}>CharityBox</Text>
      </View>
      <IconContainer 
        iconArray={headerIconsArray}
      />
      {/* <Text style={styles.P}>Manage your gift giving</Text> */}
    </View>
  )
}

export { HeaderComponent }