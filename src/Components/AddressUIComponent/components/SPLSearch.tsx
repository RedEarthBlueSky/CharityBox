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
      <View style={styles.SPLheader}>
        <View style={styles.formControl}>
            <Text style={styles.SPLInputLabel}>
              Search by Postcode:
            </Text>
            <TextInput 
              placeholder='Postcode'
              style={styles.SPLTextInput}
              onChangeText={newText => setSearchBy(newText)}
              defaultValue={searchBy}
            />
        </View>
        <Pressable
          onPress={() => SPLSearchButton(searchBy)}
          style={styles.SPLbtn}
        >
          <Text style={styles.SPLButtonText}>Submit</Text>
        </Pressable>
      </View>
      <Text style={styles.SPLerrText}>{errorText}</Text>
      <LineBreakComponent />
    </View>
  )
}

export { SPLSearch }