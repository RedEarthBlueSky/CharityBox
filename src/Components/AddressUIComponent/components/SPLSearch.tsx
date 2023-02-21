import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

import styles from '../../../Screens/styles/globalstyles'
import { LineBreakComponent } from '../../LineBreakComponent'

// =================================================
//    Search box and button + Get list from server
// =================================================

const SPLSearch = ({SPLSearchButton, errorText}) => {
  const [searchBy, setSearchBy] = useState<string>('')

  return (
    <View>
      <View style={formStyles.SPLheader}>
        <View style={formStyles.formControl}>
            <Text style={formStyles.SPLInputLabel}>
              Search by Postcode:
            </Text>
            <TextInput 
              placeholder='Postcode'
              style={formStyles.SPLTextInput}
              onChangeText={newText => setSearchBy(newText)}
              defaultValue={searchBy}
            />
        </View>
        <Pressable
          onPress={() => SPLSearchButton(searchBy)}
          style={formStyles.SPLbtn}
        >
          <Text style={formStyles.SPLButtonText}>Submit</Text>
        </Pressable>

        <Text style={formStyles.SPLerrText}>{errorText}</Text>
      </View>
      <LineBreakComponent />
    </View>
  )
}

export { SPLSearch }

const formStyles = StyleSheet.create({
  SPLheader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  formControl: {
    marginBottom: 2,
    marginTop: 2,
  },
  SPLInputLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  SPLTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    color: 'grey',
    fontSize: 22,
    height: 50,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  SPLbtn: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    borderRadius: 10,
    //  cursor: 'pointer', for webapp if implemented
    height: 60,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: 120,
  },
  SPLButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  SPLerrText: {

  },

})