//  Text Input Component that can be cleared
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

import styles from '../../Screens/styles/globalstyles'

interface TextInputClearableProps {
  label: string
  placeholder: string
  defaultValue: string
  onChangeText: () => void
  onPressClose: () => any
}

const TextInputClearable: React.FC<TextInputClearableProps> = ({
  label, 
  placeholder,
  defaultValue,
  onChangeText,
  onPressClose,
  setAddressRec,
}) => {
  const closeIcon = <Icon name="close-o" size={42} color={'grey'} />
  return (
    <View style={styles.FormControl}>
      <Text style={styles.AUILabel}>{label}</Text>
      <View style={styles.TextInputWrapper}>
        <TextInput 
          defaultValue={defaultValue}
          multiline={false}
          numberOfLines={1}
          placeholder={placeholder}
          onChangeText={onChangeText}
          style={styles.H4}
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

export { TextInputClearable }