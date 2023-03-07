//  Client UI Component
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../Styles/globalstyles'
import { ClientDataContext } from '../../Context/ClientData'
import { TextInputClearable, LineBreakComponent } from '../../Components'
import { clientDetailsData } from '../AddressUIComponent/data'

const CreateALoginComponent: React.FC = () => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  const placeholders = {
    'firstname': 'First name',
    'lastname': 'Last name',
    'mobile': 'Mobile',
    'email': 'Email',
    'password': 'Password',
  }
  const [placeHolder, setPlaceHolder] = useState<object>(placeholders)

  useEffect(() => {
  //  contextStateObject[key] returns key value of key ie clientData[firstNameKey]
    console.log('Client data from CreateALoginComponent: ', clientData)
    console.log('Placeholder data: ', placeHolder['email'])
  },[clientData, placeHolder])

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

  const onFocusTextInput = (key:string) => (
    setPlaceHolder((prevState: any) => ({
      ...prevState, [key]: ''
    }))
  )
  //  in the process of setting up input authentication
  const authenticateInputHandler = () => {
    console.log('We want some authentication here')
  }

  return (
    <View>
      <LineBreakComponent />
      <Text style={styles.H3}>Benefactors and Causes</Text>
      <LineBreakComponent />
      <Text style={styles.H4}>
        Join Free.  Build a Better World
      </Text>
      <LineBreakComponent />
      <View style={styles.clientDetailsWrapper}>
        { 
          clientDetailsData.map((client) => {
            return (
              <TextInputClearable 
                defaultValue={clientData[client.key]}
                // Key is not a property
                key={client.key}
                // END Key is not a property
                isUsername={client.key}
                onChangeText={(newText: string) => 
                  onChangeTextHandler(newText, client.key)
                }
                onPressClose={() => 
                  onPressCloseHandler(client.key)
                }
                onBlur={() => 
                  console.log(`${client.placeholder} lost focus`)
                  
                }
                onFocus={() => {
                    console.log(`${client.placeholder} got focus`)
                    onFocusTextInput(client.key)
                  }
                }
                placeholder={placeHolder[client.key]}
              />
            )
          })
        }
      </View>
      <LineBreakComponent />
      <TouchableOpacity 
        style={styles.SubmitTO}
        onPress={() => authenticateInputHandler()} 
      >
        <Text style={styles.TOText}>Join now</Text>
      </TouchableOpacity>
    </View>
  )
}

export {CreateALoginComponent}