//  AddressUI - Display and allow edit of address info
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { AddressRecContext } from '../AddressRec'
import styles from '../../../../Screens/styles/globalstyles'

const AddressUI: React.FC = () => {
  //  Shared Address record store
  const [addressRec, setAddressRec] = useContext(AddressRecContext)
  useEffect(() => {
    console.log(addressRec)
  },[addressRec])
  return (
    <View>
      <View style={{display:'flex',flexDirection:'row',marginLeft: 10,alignItems:'baseline'}}>
        <Text style={styles.H3Bold}>Address: </Text>
        <Text style={[styles.P]}>Tap to update if required:</Text>
      </View>
      {/* Address for mapped to AddressRecContext so if user edites 
      or we search for Address it updates to a from the UI */}
      <View style={formStyles.SPLForm}>

        {/***************** Company or Charity name: *******************/}
        <View style={formStyles.FormControl}>
          <Text style={formStyles.AUILabel}>Company or Charity Name:</Text>
          <TextInput 
            placeholder='Company or Charity Name:'
            style={formStyles.AUITextInput}
            onChangeText={(newText) => {
              setAddressRec((prevState: any) => ({
                ...prevState, company: newText
              }))
            }}
            defaultValue={addressRec.company}
          />
        </View>

        {/***************** Property Name/Number: *******************/}
        <View style={formStyles.FormControl}>
          <Text style={formStyles.AUILabel}>Property Name/Number:</Text>
          <TextInput 
            placeholder='Property Name/Number'
            style={formStyles.AUITextInput}
            onChangeText={(newText) => {
              setAddressRec((prevState: any) => ({
                ...prevState, line1: newText
              }))
            }}
            defaultValue={addressRec.line1}
          />
        </View>

        {/***************** Line 2: *******************/}
        <View style={formStyles.FormControl}>
          <Text style={formStyles.AUILabel}>Line 2:</Text>
          <TextInput 
            placeholder='Line 2'
            style={formStyles.AUITextInput}
            onChangeText={(newText) => {
              setAddressRec((prevState: any) => ({
                ...prevState, line2: newText
              }))
            }}
            defaultValue={addressRec.line2}
          />
        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
        {/***************** Line 3: *******************/}
          <View style={[formStyles.FormControl, {width: '46%'}]}>
            <Text style={formStyles.AUILabel}>Line 3:</Text>
            <TextInput 
              placeholder='Line 3'
              style={formStyles.AUITextInput}
              onChangeText={(newText) => {
                setAddressRec((prevState: any) => ({
                  ...prevState, line3: newText
                }))
              }}
              defaultValue={addressRec.line3}
            />
          </View>

          {/***************** Town: *******************/}
            <View style={[formStyles.FormControl, {width: '46%'}]}>
            <Text style={formStyles.AUILabel}>Town:</Text>
            <TextInput 
              placeholder='Town'
              style={formStyles.AUITextInput}
              onChangeText={(newText) => {
                setAddressRec((prevState: any) => ({
                  ...prevState, town: newText
                }))
              }}
              defaultValue={addressRec.town}
            />
          </View>
        </View>

        <View style={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
          {/***************** County: *******************/}
          <View style={[formStyles.FormControl, {width: '46%'}]}>
            {/* Line 2 */}
            <Text style={formStyles.AUILabel}>County:</Text>
            <TextInput 
              placeholder='County'
              style={formStyles.AUITextInput}
              onChangeText={(newText) => {
                setAddressRec((prevState: any) => ({
                  ...prevState, county: newText
                }))
              }}
              defaultValue={addressRec.county}
            />
          </View>

          {/***************** Country: *******************/}
          <View style={[formStyles.FormControl, {width: '46%'}]}>
            {/* Line 2 */}
            <Text style={formStyles.AUILabel}>Country:</Text>
            <TextInput 
              placeholder='Country'
              style={formStyles.AUITextInput}
              onChangeText={(newText) => {
                setAddressRec((prevState: any) => ({
                  ...prevState, country: newText
                }))
              }}
              defaultValue={addressRec.country}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export { AddressUI }

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