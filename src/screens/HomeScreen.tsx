import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button, Switch, TouchableHighlightComponent } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'

import { 
  BenefactorIntroComponent,
  CauseIntroComponent,
  LineBreakComponent,
} from '../Components'
//  grab ahold of the context
import themeContext from './styles/themeContext'
import styles from "./styles/globalstyles"


const HomeScreen: React.FC = ({ navigation }) => {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <View style={[styles.container,{backgroundColor: theme.background }]}>
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
      <Text style={[styles.H1Bold,{color: theme.color}]}>Charity Box</Text>
      <Text 
        style={[
          styles.H3,
          { color: theme.color }
        ]}
      >
          The Manage your Gift Giving App
      </Text>

      <LineBreakComponent />

      <BenefactorIntroComponent 
        navigation={navigation}
        theme={theme}
      />

      <LineBreakComponent />

      <CauseIntroComponent 
        navigation={navigation} 
        theme={theme}
      />
    </View>
  )
}

export { HomeScreen }