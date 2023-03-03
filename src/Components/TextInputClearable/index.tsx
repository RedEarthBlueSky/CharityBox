//  Text Input Component that can be cleared
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

import styles from '../../Screens/styles/globalstyles'
import { TextInputClearableProps } from '../Props'

const TextInputClearable: React.FC<TextInputClearableProps> = ({
  fieldName, 
  placeholder,
  defaultValue,
  onChangeText,
  onPressClose,
  isUsername,
}) => {
  const closeIcon = <Icon name="close-o" size={42} color={'#C7C7CD'} />
  return (
    <View style={styles.FormControl}>
      <Text style={styles.AUILabel}>{fieldName}</Text>
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
      {/* Placeholder for email as Username Checkbox */}
      { (isUsername === 'username') ?
          <View>
            <Text>Placeholder for;</Text>
            <Text>Set Email as Username</Text>
          </View>
          : null
      }
    </View>
  )
}

export { TextInputClearable }