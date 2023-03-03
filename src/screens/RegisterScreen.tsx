import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import { 
  AddressUIComponent,
  ScreenWrapperComponent,
  PageTitleComponent,
  CreateALoginComponent,
} from '../Components'
import styles from '../Styles/globalstyles'
import themeContext from '../Styles/themeContext'
import { ClientDataProvider } from '../Context/ClientData'

const RegisterScreen:React.FC = () => {
  const theme = useContext(themeContext)
  return (
    <View style={styles.container}>
      <ClientDataProvider>
        <PageTitleComponent
          slug='Create Login Screen: template Benefactor & Cause' 
          theme={theme}   
        />
        <CreateALoginComponent />
        <AddressUIComponent />
      </ClientDataProvider>
    </View>
  )
}

export { RegisterScreen }