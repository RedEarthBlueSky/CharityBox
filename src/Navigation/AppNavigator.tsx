import React, {useState, useEffect} from 'react'
import { 
  createNativeStackNavigator, 
} from '@react-navigation/native-stack'
import { EventRegister } from 'react-native-event-listeners'

import { 
  HomeScreen,
  RegisterBenefactorScreen,
  RegisterCauseScreen,
  BenefactorInformationScreen,
  LogInScreen,
  RegisterScreen,
} from '../Screens'

import theme from '../Styles/theme'
import themeContext from '../Styles/themeContext'
import { DarkTheme, DefaultTheme } from '@react-navigation/native'

const AppNavigator = () => {
  const Stack = createNativeStackNavigator()
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data)
      // console.log('Data value from useEffect in AppNavigator: ', data)
    })
    return () => {
      EventRegister.removeAllListeners(listener)
    }
  }, [darkMode])

  return (
    <themeContext.Provider 
      value={darkMode === true ? theme.dark : theme.light}
    >
      <Stack.Navigator 
        initialRouteName='Apply Now'
        // theme={darkMode === true ? DarkTheme : DefaultTheme}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
        />
        <Stack.Screen 
          name="Apply Now"
          component={RegisterScreen}
        />
        <Stack.Screen 
          name="Create Benefactor Profile" 
          component={RegisterBenefactorScreen} 
        />
        <Stack.Screen 
          name="Create Cause Profile"
          component={RegisterCauseScreen}
        />
        <Stack.Screen 
          name="Benefactor Information"
          component={BenefactorInformationScreen}
        />
        <Stack.Screen 
          name="Log In"
          component={LogInScreen}
        />
      </Stack.Navigator>
    </themeContext.Provider>
  )
}

export default AppNavigator
