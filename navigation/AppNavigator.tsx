import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../src/screens/HomeScreen'
import BenefactorProfileScreen from '../src/screens/BenefactorScreens/BenefactorProfileScreen'

const AppNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <Stack.Screen 
        name="Benefactor" 
        component={BenefactorProfileScreen} 
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
