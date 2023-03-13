import { View, Text } from 'react-native'
import React from 'react'

const ErrorMessageComponent = ({
  errorMessage,
  isConnected,
}) => {
  return (
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
  )
}

export {ErrorMessageComponent}