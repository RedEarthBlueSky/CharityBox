import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles/globalstyles'

const GivingToCharitiesScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Giving To Charities</Text>
      <Text style={styles.H3}>
        Together we can make sure charities continue their good work.
      </Text>
      <Text style={styles.H2Bold}>
        Start your Benefactor Giving
      </Text>
      <Text style={styles.H3}>
        Open a 
      </Text>
    </View>
  )
}

export { GivingToCharitiesScreen }