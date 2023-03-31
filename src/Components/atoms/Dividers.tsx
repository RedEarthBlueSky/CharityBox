import { View, Text } from 'react-native'
import React from 'react'

import { styles } from '../../Styles'

const PDivider = () => {
  return (
    <View style={styles.paragraphDivider}>
    </View>
  )
}
const PDividerBorder = () => {
  return (
    <View style={styles.pDividerBorder}>
    </View>
  )
}

export { PDivider, PDividerBorder }