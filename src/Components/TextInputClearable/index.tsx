//  Text Input Component that can be cleared
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/Fontisto'

import styles from '../../Styles/globalstyles'
import { TextInputClearableProps } from '../../Props'

const TextInputClearable: React.FC<TextInputClearableProps> = ({
  fieldName, 
  placeholder,
  defaultValue,
  onChangeText,
  onPressClose,
  isUsername,
  onBlur,
  onFocus
}) => {
  const closeIcon = <Icon name="close" size={30} color={'#C7C7CD'} />

  return (
    <View style={styles.FormControl}>
      { (isUsername !== 'mobilephonelater') ?
        <View style={styles.TextInputWrapper}>
          <View 
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Text>Icon</Text>
            <TextInput 
              defaultValue={defaultValue}
              numberOfLines={1}
              placeholder={placeholder}
              onChangeText={onChangeText}
              style={styles.JoinTextInput}
              onBlur={onBlur}
              onFocus={onFocus}
            />
          </View>
          <TouchableOpacity
            onPress={onPressClose}
          >
            {closeIcon}
          </TouchableOpacity>
        </View>
        : 
        // <View style={styles.TextInputWrapper}>
        //   <Text>react-native-phone-number-input package future iterations</Text>
        //   <TouchableOpacity
        //     onPress={onPressClose}
        //   >
        //     {closeIcon}
        //   </TouchableOpacity>
        // </View>
        null
      }
    </View>
  )
}

export {TextInputClearable}