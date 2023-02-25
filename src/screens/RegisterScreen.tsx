import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import { 
  AddressUIComponent,
  ScreenWrapperComponent,
  PageTitleComponent,
  ClientUIComponent,
} from '../Components'
import styles from './styles/globalstyles'
import themeContext from './styles/themeContext'
import { AddressRecProvider } from '../Components/AddressUIComponent/components'

const RegisterScreen:React.FC = () => {
  const theme = useContext(themeContext)
  return (
    <View style={styles.container}>
      <AddressRecProvider>
        <PageTitleComponent
          slug='Register Screen: template Benefactor & Cause' 
          theme={theme}   
        />
        <ClientUIComponent />
        <AddressUIComponent />
      </AddressRecProvider>
    </View>
  )
}

export { RegisterScreen }