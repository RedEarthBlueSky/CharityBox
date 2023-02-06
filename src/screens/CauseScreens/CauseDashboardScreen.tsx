import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "../styles/globalstyles"

const CauseDashboardScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Cause Screen</Text>
      <Text>
        You are a Charity, group, team, company
        who wishes to accept gift donations.
      </Text>
      <Text>Yes this describes me</Text>
      <Text>Perhaps not please take me back to the main screen</Text>
    </View>
  )
}

export  { CauseDashboardScreen }