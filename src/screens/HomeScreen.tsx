import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Switch } from 'react-native'
import styles from '../../styles/globalstyles'

const HomeScreen: React.FC = () => {

  const [mode, setMode] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Text style={styles.H1Bold}>Welcome to Charity Box</Text>
      <Switch 
        value={mode}
        onValueChange={() => setMode((value: boolean) => !value)}
      />
      <Button title='My Profile' />
    </View>
  )
}

export default HomeScreen