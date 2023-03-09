import { View, Text } from 'react-native'
import React, {useContext} from 'react'

import { 
  AddressUIComponent,
  ScreenWrapperComponent,
  PageTitleComponent,
  CreateALoginComponent,
  BR,
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
          title='Become a Benefactor' 
          theme={theme}   
        />
        <CreateALoginComponent />
        {/* Move address UI to a separate page */}
        {/* <AddressUIComponent /> */}
      </ClientDataProvider>
      <BR />
      <BR />
      <Text style={[styles.H2, {color: theme.color}]}>Become a Benefactor</Text>
    </View>
  )
}

export { RegisterScreen }