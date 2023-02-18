import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import { 
  AddressUIComponent,
  ScreenWrapperComponent,
  PageTitleComponent,
} from '../Components'
import styles from './styles/globalstyles'
import themeContext from './styles/themeContext'

const RegisterScreen:React.FC = () => {
  const theme = useContext(themeContext)
  return (
    <View>
      <PageTitleComponent
        title='Register Screen'
        slug='Duplicate for Benefactor and Cause' 
        theme={theme}   
      />
      <AddressUIComponent />
      <Text>
        This example shows how to implements a Postcode address Finder
        using React Native.  It returns example addresses no matter what
        is entered as  search Postcode.  The UI is customizable for the developer.
      </Text>
    </View>
  )
}

export { RegisterScreen }