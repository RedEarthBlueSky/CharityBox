//  Client UI Component
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

import styles from '../../Screens/styles/globalstyles'
import { AddressRecContext } from '../AddressUIComponent/components/AddressRec'
import { TextInputClearable } from '../TextInputClearable'
import { clientDetailsData } from '../AddressUIComponent/data'

const ClientUIComponent: React.FC = () => {
  const [addressRec, setAddressRec] = useContext(AddressRecContext)
  useEffect(() => {
    console.log(addressRec[firstNameKey])
  },[addressRec])

  //  Handle updates to the text
  const onChangeTextHandler = (newText: string, key: string) => {
    setAddressRec((prevState: any) => ({
      ...prevState, [key]: newText
    }))
  }
  //  development example of how to pass the value into text change handler
  const firstNameKey = 'firstname'
  const label = 'First Name'

  //  Handle clear text input 
  const onPressCloseHandler = (key:string) => (
    setAddressRec((prevState: any) => ({
      ...prevState, [key]: ''
    }))
  )
  
  console.log('Value returned is: ', addressRec[firstNameKey])

  return (
    <View>
      <Text style={styles.H3Bold}>Client UI Component</Text>
      <TextInputClearable 
        defaultValue={addressRec[firstNameKey]}
        label={`${label}:`}
        onChangeText={(newText: string) => onChangeTextHandler(newText, firstNameKey)}
        onPressClose={() => onPressCloseHandler(firstNameKey)}
        placeholder={label}
      />
    </View>
  )
}

export {ClientUIComponent}