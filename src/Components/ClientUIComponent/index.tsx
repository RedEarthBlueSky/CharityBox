//  Client UI Component
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../Screens/styles/globalstyles'
import { AddressRecContext } from '../AddressUIComponent/components/AddressRec'
import { TextInputClearable } from '../TextInputClearable'
import { clientDetailsData } from '../AddressUIComponent/data'

const ClientUIComponent: React.FC = () => {
  const [addressRec, setAddressRec] = useContext(AddressRecContext)
  useEffect(() => {
    //  contextStateObject[key] will return the value of that key
    //  ie addressRec[firstNameKey]
    console.log(addressRec)
  },[addressRec])

  const onChangeTextHandler = (newText: string, key: string) => {
    setAddressRec((prevState: any) => ({
      ...prevState, [key]: newText
    }))
  }
  const firstNameKey = 'firstname'
  const label = 'First Name'

  const onPressCloseHandler = (key:string) => (
    setAddressRec((prevState: any) => ({
      ...prevState, [key]: ''
    }))
  )

  return (
    <View>
      <Text style={styles.H3Bold}>Create a Login</Text>
      { 
        clientDetailsData.map((client) => (
          <TextInputClearable 
            key={client.key}
            isUsername={client.key}
            defaultValue={addressRec[client.key]}
            fieldName={`${client.label}:`}
            onChangeText={(newText: string) => onChangeTextHandler(newText, client.key)}
            onPressClose={() => onPressCloseHandler(client.key)}
            placeholder={client.label}
          />
        ))
      }
    </View>
  )
}

export {ClientUIComponent}