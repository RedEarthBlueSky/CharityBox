import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, Button, Switch, TouchableHighlightComponent } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'

import { 
  BasicButtonComponent,
  BenefactorIntroComponent,
  CauseIntroComponent,
  ScreenWrapperComponent,
  PageTitleComponent,
} from '../Components'
//  grab ahold of the context
import themeContext from './styles/themeContext'
import styles from "./styles/globalstyles"

const HomeScreen: React.FC = ({ navigation }) => {
  const theme = useContext(themeContext)
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <ScreenWrapperComponent>
      <View 
        style={[styles.container,{backgroundColor: theme.background }]}
      >
        <BasicButtonComponent 
          title='Log In'
          action={() => navigation.navigate("Log In")}
          theme={theme}
        />
        <Switch 
          value={darkMode}
          onValueChange={(value) => { 
            setDarkMode(!darkMode)
            EventRegister.emit('ChangeTheme', value)
          }}
        />
        <PageTitleComponent 
          title='Charity Box'
          slug='The Manage your Gift Giving App'
          theme={theme}
        />
        <BenefactorIntroComponent 
          navigation={navigation}
          theme={theme}
        />
        <CauseIntroComponent 
          navigation={navigation} 
          theme={theme}
        />
      </View>
    </ScreenWrapperComponent>
  )
}

export { HomeScreen }