import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Switch } from 'react-native'

import { LineBreak } from '../Components'
import styles from "./styles/globalstyles"

const HomeScreen: React.FC = ({navigation}) => {

  const {navigate} = navigation
  const [mode, setMode] = useState<boolean>(false)

  return (
    <View style={styles.container}>
      <Switch 
        value={mode}
        onValueChange={() => setMode((value: boolean) => !value)}
      />
      <Text style={styles.H1Bold}>Charity Box</Text>
      <Text style={styles.H3}>The Manage your Gift Giving App</Text>
      <LineBreak />
      <Text style={styles.H2Bold}>Benefactor</Text>
      <Text style={styles.H3}>An individual who wishes to donate.</Text>
      <Text style={styles.P}> Default font size </Text>
      <Button 
        title='Create Benefactor Profile' 
        onPress={() => navigate("Create Benefactor Profile")}
      />
      <Button 
        title='Benefactors Find out More' 
        onPress={() => navigate("Benefactor Information")}
      />
      <LineBreak />
      <Text style={styles.H2Bold}>Cause</Text>
      <Text style={styles.H3}>
        A chairty or company who wishes to aceept donations.
      </Text>
      <Button 
        title='Create Cause Profile' 
        onPress={() => navigate("Create Cause Profile")}
      />
    </View>
  )
}

export { HomeScreen }