//  Client UI Component
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

import styles from '../../Screens/styles/globalstyles'
import { AddressRecContext } from '../AddressUIComponent/components/AddressRec'
import { TextInputClearable } from '../TextInputClearable'

const ClientUIComponent: React.FC = () => {
  const [addressRec, setAddressRec] = useContext(AddressRecContext)
  useEffect(() => {
    console.log(addressRec)
  },[addressRec])

  const closeIcon = <Icon name="close-o" size={42} color={'grey'} />

  //  Handle updates to the text
  const onChangeTextHandler = (newText: string, key: string) => {
    setAddressRec((prevState: any) => ({
      ...prevState, [key]: newText
    }))
  }
  //  development example of how to pass the value into text change handler
  const firstNameKey = 'firstname'

  //  Handle clear text input 
  const onPressCloseHandler = (key:string) => {
    setAddressRec((prevState: any) => ({
      ...prevState, [key]: ''
    }))
  }

  return (
    <View>
      <Text style={styles.H3Bold}>Client UI Component</Text>

      <TextInputClearable 
        label='First Name:'
        placeholder='First Name'
        defaultValue={addressRec.firstNameKey}
        onChangeText={(newText: string) => onChangeTextHandler(newText, firstNameKey)}
        onPressClose={() => onPressCloseHandler(firstNameKey)}
      />

      {/***************** Middle Name(s): *******************/}
      <View style={styles.FormControl}>
        <Text style={styles.AUILabel}>Middle Name(s):</Text>
        <TextInput 
          placeholder='Middle Name(s):'
          style={styles.AUITextInput}
          onChangeText={(newText) => {
            setAddressRec((prevState: any) => ({
              ...prevState, middlenames: newText
            }))
          }}
          defaultValue={addressRec.middlenames}
        />
      </View>

      {/***************** Last Name: *******************/}
      <View style={styles.FormControl}>
        <Text style={styles.AUILabel}>Last Name:</Text>
        <TextInput 
          placeholder='Last Name'
          style={styles.AUITextInput}
          onChangeText={(newText) => {
            setAddressRec((prevState: any) => ({
              ...prevState, lastname: newText
            }))
          }}
          defaultValue={addressRec.lastname}
        />
      </View>

    </View>
  )
}

export {ClientUIComponent}