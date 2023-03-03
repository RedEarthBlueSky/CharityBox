//  Client UI Component
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../Styles/globalstyles'
import { ClientDataContext } from '../../Context/ClientData'
import { TextInputClearable } from '../TextInputClearable'
import { clientDetailsData } from '../AddressUIComponent/data'

const CreateALoginComponent: React.FC = () => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  useEffect(() => {
  //  contextStateObject[key] returns key value of key ie clientData[firstNameKey]
    console.log(clientData)
  },[clientData])

  const onChangeTextHandler = (newText: string, key: string) => {
    setClientData((prevState: any) => ({
      ...prevState, [key]: newText
    }))
  }

  const onPressCloseHandler = (key:string) => (
    setClientData((prevState: any) => ({
      ...prevState, [key]: ''
    }))
  )

  return (
    <View>
      <Text style={styles.H3}>Get Ready to Give</Text>
      <Text style={styles.H4}>Join Free to Build a Better World</Text>
      { 
        clientDetailsData.map((client) => {
          return (
            <TextInputClearable 
              // Key is not a property
              key={client.key}
              isUsername={client.key}
              defaultValue={clientData[client.key]}
              fieldName={client.label}
              onChangeText={(newText: string) => onChangeTextHandler(newText, client.key)}
              onPressClose={() => onPressCloseHandler(client.key)}
              placeholder={client.placeholder}
            />
          )
        })
      }
    </View>
  )
}

export {CreateALoginComponent}