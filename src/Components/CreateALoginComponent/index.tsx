//  Client UI Component
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../Styles/globalstyles'
import { ClientDataContext } from '../../Context/ClientData'
import { TextInputClearable, BR } from '../../Components'
import { clientDetailsData } from '../../Data'
import { fetchEmailValidation } from '../../APIs'

const CreateALoginComponent: React.FC = () => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    //  console.log(JSON.stringify(clientData, null, 2 ))
    setErrorMessage('')
    // fetchEmailValidation('ian@isalt.digital',setErrorMessage)
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

  const keyList = [
    'firstname',
    'lastname',
    'email',
    'mobilephone',
    'password',
  ]

  const authenticateInput = (key: string, placeholder:string) => {
    keyList.forEach((keyItem) => {
      if (key === keyItem) {
        if (!clientData[key]) {
          setErrorMessage(`Please provide a ${placeholder}`)
          return
        } else {
          if (key==='email' || key==='mobilephone' || key==='password') {
            console.log(`${placeholder} requires validation`)
            return
          }
        }
        console.log(`${placeholder} does not require validation`)
      }
    })
  }


  return (
    <View style={styles.componentContainer}>
      <View>
        { ( errorMessage !== '' ) ?
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
                onChangeText={(newText: string) => onChangeTextHandler(newText, client.key)}
                onPressClose={() => onPressCloseHandler(client.key)}
                onBlur={() => {
                  // console.log(`${client.key} lost focus`)
                  authenticateInput(client.key, client.placeholder)
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