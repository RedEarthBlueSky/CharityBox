//  HEADER COMPONENT
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import { styles } from '../Styles/styles'

const plusIcon = <Icon name="plus-square-o" size={30} color="#000" />
const heartIcon = <Icon name="heart-o" size={28} color="#000" />
const commentIcon = <Icon name="comment-o" size={28} color="#000" />
const flagIcon = <Icon name="flag-o" size={28} color="#000" />




const HeaderComponent:React.FC = () => {
  return (
    <View style={styles.rowFlexContainer}>   
      {/* Logo     */}
      <TouchableOpacity onPress={() => console.log('Logo hit!')}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </TouchableOpacity>
      <View style={styles.colFlex} >
        <Text style={styles.H3}>CharityBox</Text>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          {plusIcon}
        </TouchableOpacity>
        <TouchableOpacity>
          {heartIcon}
        </TouchableOpacity>
        <TouchableOpacity>
          {commentIcon}
        </TouchableOpacity>
        <TouchableOpacity>
          {flagIcon}
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.P}>Manage your gift giving</Text> */}
    </View>
  )
}

export { HeaderComponent }