//  Client UI Component
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../Screens/styles/globalstyles'
import { AddressRecContext } from '../AddressUIComponent/components/AddressRec'
import { TextInputClearable } from '../TextInputClearable'

const ClientUIComponent: React.FC = () => {
  const [addressRec, setAddressRec] = useContext(AddressRecContext)
  useEffect(() => {
    console.log('addressRec from useEffect: ', addressRec)
  },[addressRec])
  
  return (
    <View>
      <Text style={styles.H3Bold}>Client UI Component</Text>

      <TextInputClearable 
        label='First Name:'
        placeholder='First Name'
        defaultValue={addressRec.firstname}
        onChangeText={(newText: string) => {
          setAddressRec((prevState: any) => ({
            ...prevState, firstname: newText
          }))
        }}
        onPressClose={() => setAddressRec((prevState: any) => (
          {...prevState, firstname: '' }
          ))
        }
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