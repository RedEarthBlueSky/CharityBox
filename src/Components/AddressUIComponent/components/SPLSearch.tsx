import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

import styles from '../../../Screens/styles/globalstyles'
import { LineBreakComponent } from '../../LineBreakComponent'

// =================================================
//    Search box and button + Get list from server
// =================================================

const SPLSearch = ({SPLSearchButton, errorText}) => {
  const [searchBy, setSearchBy] = useState<string>('')

  const onSubmit = () => {
    console.log("Button press sucessful!")
    /* Validate we have something to do then search */
    // if (searchBy) { SPLSearchButton(searchBy) }
    console.log('So our state is: ', searchBy)
  }
  return (
    <View>
      <LineBreakComponent />
      <Text style={styles.H3Bold}>SPLSearch Component</Text>
      <Text style={styles.H4}>
        Seach box and button + Get list from server
      </Text>
      <View style={formStyles.SPLheader}>
        <View style={formStyles.formControl}>
            <Text style={formStyles.SPLInputLabel}>Search by Postcode:</Text>
            <TextInput 
              placeholder='Enter Postcode'
              style={formStyles.SPLTextInput}
              onChangeText={newText => setSearchBy(newText)}
              defaultValue={searchBy}
            />
        </View>
        <Button
          style={formStyles.SPLbtn}
          title='Submit'
          onPress={() => onSubmit()}
        />
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
    fontSize: 22,
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
    borderRadius: 5,
    //  cursor: 'pointer', for webapp if implemented
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  SPLerrText: {

  },

})