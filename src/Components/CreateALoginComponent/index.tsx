//  Client UI Component
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'
import NetInfo from '@react-native-community/netinfo'

import styles from '../../Styles/globalstyles'
import { ClientDataContext } from '../../Context/ClientData'
import { TextInputClearable, BR } from '../../Components'
import { clientDetailsData, keyList } from '../../Data'
import { fetchEmailValidation } from '../../APIs'
import {fetchDeviceConnected,onChangeTextHandler,onPressCloseHandler,} from '../../Utils'

const CreateALoginComponent: React.FC = () => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect( () => {
    //  console.log(JSON.stringify(clientData, null, 2 ))
    // fetchEmailValidation('ian@isalt.digital',setErrorMessage)
    setErrorMessage('')
    fetchDeviceConnected(NetInfo, setIsConnected, isConnected, setErrorMessage)
  },[clientData, isConnected])

  const validateMobileNumber = (mobileNumber: string, setErrorMessage: any) => {
    const reg = /^[0]?[789]\d{9}$/
    console.log('Mobile number: ', mobileNumber)
    console.log('Test the number: ', reg.test(mobileNumber))
  }

  const authInputOnBlur = (key: string, placeholder:string) => {
    keyList.forEach((keyItem) => {
      if (key === keyItem) {
        if (!clientData[key]) {
          setErrorMessage(`Please provide a ${placeholder}`)
          return
        } else if (key === 'firstname' || 'lastname') {
          console.log(`${placeholder} does not require validation`)
        }
      }
    })
  }

  const authMobileInput = (key: string) => {
    if (key === 'mobilephone') {
      console.log(`${key} value: `, clientData[key])
    }
  }

  return (
    <View style={styles.componentContainer}>
      <View>
        {(errorMessage !== '' || isConnected == false) ?
            <Text style={{
              color: '#cc2b23',
              fontSize: 16,
              fontWeight: 'bold',
              paddingLeft: 2,
              paddingTop: 0,
              height: 32,
            }}
            
            >{errorMessage}</Text>
            : 
            <><Text style={{height: 32,}}></Text></>      
   
        }
      </View>
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
                onPressClose={() => onPressCloseHandler(
                  client.key, setClientData)}
                onBlur={() => {
                  // console.log(`${client.key} lost focus`)
                  authInputOnBlur(client.key, client.placeholder)
                }}
                // onFocus={() => console.log(`${client.key} got focus`)}
              />
            )
          })
        }
      </View>
      <TouchableOpacity 
        style={styles.SubmitTO}
        onPress={() => console.log('Join now pressed')}
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