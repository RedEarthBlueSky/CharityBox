//  Client UI Component
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import NetInfo from '@react-native-community/netinfo'

import styles from '../../Styles/globalstyles'
import { ClientDataContext } from '../../Context/ClientData'
import { TextInputClearable, BR } from '../../Components'
import { ErrorMessageComponent } from './components'
import { clientDetailsData, keyList } from '../../Data'
import { fetchEmailValidation } from '../../APIs'
import {
  fetchDeviceConnected,
  onChangeTextHandler,
  onPressCloseHandler,
} from '../../Utils'

const CreateALoginComponent: React.FC = () => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [emailValid, setEmailValid] =  useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect( () => {
    setEmailValid(false)
    setErrorMessage('')
    fetchDeviceConnected(NetInfo, setIsConnected, isConnected, setErrorMessage)
  },[clientData, isConnected])

  const validateMobileNumber = (mobileNumber: string) => {
    const reg = /^[0]?[789]\d{9}$/
    console.log('Mobile number: ', mobileNumber)
    console.log('Test the number: ', reg.test(mobileNumber))
  }

  const authenticateInput = () => {
    //  not using a forEach because you cannot break from the loop
    for (const client of clientDetailsData) {
      if (!clientData[client.key]) {
        console.log(client.placeholder, 'has no data')
        setErrorMessage(`Please provide your ${client.placeholder}`)
        break
      }
      if (client.key === 'email' && !emailValid) {
        fetchEmailValidation(client.key, clientData[client.key], setErrorMessage, setEmailValid, emailValid)
        break
      }

    }
  }

  return (
    <View style={styles.componentContainer}>
      <ErrorMessageComponent 
        errorMessage={errorMessage} 
        isConnected={isConnected} 
      />
      <View style={styles.clientDetailsWrapper}>
        { 
          clientDetailsData.map((client) => {
            return (
              <TextInputClearable 
                placeholder={client.placeholder}                
                defaultValue={clientData[client.key]}
                key={client.key} // Key is not a passable property
                isUsername={client.key}
                onChangeText={(newText: string) => {
                  onChangeTextHandler(newText, client.key, setClientData)
                }}
                onPressClose={() => onPressCloseHandler(client.key, setClientData)}
              />
            )
          })
        }
      </View>
      <TouchableOpacity 
        style={styles.SubmitTO}
        onPress={() => authenticateInput()}
      >
        <Text style={styles.TOText}>Join now</Text>
      </TouchableOpacity>
      <BR />
      <Text style={styles.H4}>
        Join Free.  Make your better world
      </Text>
    </View>
  )
}

export {CreateALoginComponent}