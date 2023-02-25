import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, {useState} from 'react'

import styles from '../../../Screens/styles/globalstyles'
import { LineBreakComponent } from '../../LineBreakComponent'

// =================================================
//    Search box and button + Get list from server
// =================================================

const SPLSearch = ({
  SPLSearchButton, 
  errorText,
  showAddressUI,
  setShowAddressUI,
  setErrorTxt,
}) => {
  const [searchBy, setSearchBy] = useState<string>('')

  return (
    <View>
      <View style={styles.SPLheader}>
      <Text style={styles.SPLInputLabel}>
              Search by Postcode:
      </Text>
        <View style={styles.formControl}>
            <TextInput 
              placeholder='Postcode'
              style={styles.SPLTextInput}
              onChangeText={newText => {
                setSearchBy(newText)
                // console.log(newText)
              }}
              defaultValue={searchBy}
            />
          <Pressable
            onPress={() => SPLSearchButton(searchBy)}
            style={styles.SPLbtn}
          >
            <Text style={styles.SPLButtonText}>Find</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              setShowAddressUI(true)
              setErrorTxt('')
            }}
            style={styles.SPLbtn}
          >
            <Text style={styles.SPLButtonText}>Enter</Text>
          </Pressable>
        </View>
      </View>
      <Text style={(errorText=='')? {height:0} :styles.SPLerrText}>{errorText}</Text>
    </View>
  )
}

export { SPLSearch }