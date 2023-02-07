import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { LineBreakComponent } from '../LineBreakComponent'
import styles from '../../Screens/styles/globalstyles'

const BenefactorIntroComponent: React.FC = ({ navigation }) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.H2Bold}>Benefactor</Text>
      <Text style={styles.H3}>An individual who wishes to donate.</Text>
      <Text style={styles.P}> Default font size </Text>
      <LineBreakComponent />
      <Button 
        title='Create Benefactor Profile' 
        onPress={() => navigation.navigate("Create Benefactor Profile")}
      />
      <LineBreakComponent />
      <Button 
        title='Benefactors Find out More' 
        onPress={() => navigation.navigate("Benefactor Information")}
      />
    </View>
  )
}

export { BenefactorIntroComponent }