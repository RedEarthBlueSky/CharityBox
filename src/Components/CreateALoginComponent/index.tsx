//  Client UI Component
import { View, Text, TouchableOpacity } from 'react-native'
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

  //  in the process of setting up input authentication
  const authenticateInputHandler = () => {
    console.log('We want some authentication here')
  }

  return (
    <View>
      <Text style={styles.H3}>Get Ready to Give</Text>
      <Text style={styles.H4}>Join Free.  Build a Better World</Text>
      { 
        clientDetailsData.map((client) => {
          return (
            <TextInputClearable 
              // Key is not a property
              key={client.key}
              // END Key is not a property
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
        <TouchableOpacity 
          style={styles.SubmitTO}
          onPress={() => authenticateInputHandler()} 
        >
          <Text style={styles.TOText}>Create</Text>
        </TouchableOpacity>
    </View>
  )
}

export {CreateALoginComponent}