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
    <View style={styles.container}>
      <PageTitleComponent
        slug='Register Screen: template Benefactor & Cause' 
        theme={theme}   
      />
      <AddressUIComponent />
    </View>
  )
}

export { RegisterScreen }