//  Text Input Component that can be cleared
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

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
  const closeIcon = <Icon name="close-o" size={35} color={'#C7C7CD'} />
  useEffect(() => {

  })
  
  return (
    <View style={styles.FormControl}>
      <View style={styles.TextInputWrapper}>
        <TextInput 
          defaultValue={defaultValue}
          numberOfLines={1}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.JoinTextInput}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <TouchableOpacity
          onPress={onPressClose}
        >
          {closeIcon}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export {TextInputClearable}