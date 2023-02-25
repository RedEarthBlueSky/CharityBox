//  Client UI Component
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import styles from '../../Screens/styles/globalstyles'
import { AddressRecContext } from '../AddressUIComponent/components/AddressRec'

const ClientUIComponent: React.FC = () => {
  const [addressRec, setAddressRec] = useContext(AddressRecContext)
  useEffect(() => {
    console.log(addressRec)
  },[addressRec])
  return (
    <View>
      <Text style={styles.H3Bold}>Client UI Component</Text>

      {/***************** First Name: *******************/}
      <View style={formStyles.FormControl}>
        <Text style={formStyles.AUILabel}>First Name:</Text>
        <TextInput 
          placeholder='First Name:'
          style={formStyles.AUITextInput}
          onChangeText={(newText) => {
            setAddressRec((prevState: any) => ({
              ...prevState, firstname: newText
            }))
          }}
          defaultValue={addressRec.firstname}
        />
      </View>

      {/***************** Middle Name(s): *******************/}
      <View style={formStyles.FormControl}>
        <Text style={formStyles.AUILabel}>Middle Name(s):</Text>
        <TextInput 
          placeholder='Middle Name(s):'
          style={formStyles.AUITextInput}
          onChangeText={(newText) => {
            setAddressRec((prevState: any) => ({
              ...prevState, middlenames: newText
            }))
          }}
          defaultValue={addressRec.middlenames}
        />
      </View>

      {/***************** Last Name: *******************/}
      <View style={formStyles.FormControl}>
        <Text style={formStyles.AUILabel}>Last Name:</Text>
        <TextInput 
          placeholder='Last Name'
          style={formStyles.AUITextInput}
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

const formStyles = StyleSheet.create({
  SPLForm: {
    marginBottom: 10,
  },
  FormControl: {
    marginHorizontal: 2,
    marginVertical: 2,
  },
  AUITextInput: {
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    color: 'grey',
    width: '90%',
    height: 40,
    marginLeft: 10,
    paddingLeft: 10,
  },
  AUILabel: {
    fontSize: 16,
    marginLeft: 10,
  }
})