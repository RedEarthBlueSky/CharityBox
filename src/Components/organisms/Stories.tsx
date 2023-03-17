import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

import { oStyles, styles } from '../../Styles'
import { getRapidAPI } from '../../APIs'

const Stories = () => {

  useEffect(() => {
    getRapidAPI()
  }, [])

  return (
    <View style={styles.rowFlexContainer}>
      <Text style={styles.H2}>Stories Component</Text>
    </View>
  )
}

export { Stories }