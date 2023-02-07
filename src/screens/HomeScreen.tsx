import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button, Switch } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'

import { 
  BenefactorIntroComponent,
  CauseIntroComponent,
  LineBreakComponent,
} from '../Components'
import styles from "./styles/globalstyles"
//  grab ahold of the context
import themeContext from './styles/themeContext'

const HomeScreen: React.FC = ({ navigation }) => {
  const theme = useContext(themeContext)

  //  give a true or false value to the state from switch
  const [darkMode, setDarkMode] = useState<boolean>(false)

  //  let's take a look at the value of the theme state
  console.log(darkMode)

  return (
    <View style={[
      styles.container,
      {backgroundColor: theme.background }
    ]}>
      <Button 
        title='Log In' 
        onPress={() => navigation.navigate("Log In")}
      />
      <Switch 
        value={darkMode}
        onValueChange={(value) => { 
          setDarkMode(!darkMode)
          EventRegister.emit('ChangeTheme', value)
        }}
      />
      <Text style={[
        styles.H1Bold,
        { color: theme.color }
      ]}>Charity Box</Text>
      <Text style={styles.H3}>The Manage your Gift Giving App</Text>
      <LineBreakComponent />
      {/* Need to pass the navigation object to the component */}
      <BenefactorIntroComponent navigation={navigation}/>
      <LineBreakComponent />
      <CauseIntroComponent navigation={navigation} />
    </View>
  )
}

export { HomeScreen }