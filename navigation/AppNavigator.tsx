import * as React from 'react'
import { 
  createNativeStackNavigator, 
} from '@react-navigation/native-stack'

import { 
  HomeScreen,
  RegisterBenefactorScreen,
  RegisterCauseScreen,
  BenefactorInformationScreen,
} from '../src/Screens'

const AppNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
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
    </Stack.Navigator>
  )
}

export default AppNavigator
