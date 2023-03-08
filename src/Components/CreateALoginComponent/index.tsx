//  Client UI Component
import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../Styles/globalstyles'
import { ClientDataContext } from '../../Context/ClientData'
import { TextInputClearable, brH1, BR } from '../../Components'
import { clientDetailsData } from '../../Data'

const CreateALoginComponent: React.FC = () => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  const [errorMessage, setErrorMessage] = useState('')
  useEffect(() => {
    // console.log('Client data from CreateALoginComponent: ', clientData)
    setErrorMessage('')
    // fetchEmailValidation('redearthbluesea@gmail.com')

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

  const AbstractEmailAPIKey = '0b95b8f74e934242b325bae682762c11'

  const fetchEmailValidation = async (email: string) => {
    setErrorMessage('')
    const fetchData = (url: string):Promise<any> => {
      return fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
              //  Do something if the problems is our end
              //  Most likely an API key issue
              if (data.is_valid_format.value){
                if (data.deliverability == 'DELIVERABLE'){
                  console.log(`${data.email} is ${data.deliverability} AND format is valid`)
                } else {
                  setErrorMessage(`${data.deliverability} email please resubmit`)
                  return
                }   
              } else {
                setErrorMessage(`Email format is invalid please resubmit`)
                return
              }            
            });}
    const emailValidationLink = `https://emailvalidation.abstractapi.com/v1/?api_key=${AbstractEmailAPIKey}&email=${email}`
    fetchData(emailValidationLink)
  }

  const authenticateInput = (key: string) => {
    if (key === 'firstname'  && !clientData[key]) { 
      setErrorMessage(`Please enter your First name`) 
    }
    if (key === 'lastname'  && !clientData[key]) { 
      setErrorMessage(`Please enter your Last name`) 
    }
    if (key === 'email') { 
      if (!clientData[key]) {
        setErrorMessage(`Please specify your Email address`) 
      }
      console.log('Validate email address!')
    }
    if (key === 'mobilephone'  && !clientData[key]) { 
      setErrorMessage(`Please enter your Mobile number`) 
    }
    if (key === 'password'  && !clientData[key]) { 
      setErrorMessage(`Please create a password`) 
    }
  }


  return (
    <View style={styles.componentContainer}>
      <BR />
      <Text style={styles.H4}>
        Join Free.  Make your better world
      </Text>

      <View>
        { ( errorMessage !== '' ) ?
            <Text style={{
              color: '#cc2b23',
              fontSize: 18,
              fontWeight: '400',
              paddingLeft: 2,
              paddingTop: 5,
              height: 43,
            }}
            
            >{errorMessage}</Text>
            : 
            <><BR /><BR /></>      
   
        }
      </View>
      <View style={styles.clientDetailsWrapper}>
        { 
          clientDetailsData.map((client) => {
            return (
              <TextInputClearable 
                placeholder={client.placeholder}                
                defaultValue={clientData[client.key]}
                key={client.key} // Key is not a property
                isUsername={client.key}
                onChangeText={(newText: string) => onChangeTextHandler(newText, client.key)}
                onPressClose={() => onPressCloseHandler(client.key)}
                onBlur={() => {
                  console.log(`${client.key} lost focus`)
                  authenticateInput(client.key)
                }}
                onFocus={() => console.log(`${client.key} got focus`)}
              />
            )
          })
        }
      </View>
      <BR />
      <TouchableOpacity 
        style={styles.SubmitTO}
        onPress={() => console.log('Join now pressed')}
      >
        <Text style={styles.TOText}>Join now</Text>
      </TouchableOpacity>
    </View>
  )
}

export {CreateALoginComponent}