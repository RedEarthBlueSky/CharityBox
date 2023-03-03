//  Text Input Component that can be cleared
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import Icon from 'react-native-vector-icons/EvilIcons'

import styles from '../../Styles/globalstyles'
import { TextInputClearableProps } from '../Props'

const TextInputClearable: React.FC<TextInputClearableProps> = ({
  fieldName, 
  placeholder,
  defaultValue,
  onChangeText,
  onPressClose,
  isUsername,
}) => {

  const [useLabel, setUseLabel] = useState<boolean>(true)
  const closeIcon = <Icon name="close-o" size={35} color={'#C7C7CD'} />
  useEffect(() => {
    if (isUsername=='lastname') {setUseLabel(false)}
  },[isUsername])
  
  return (
    <View style={styles.FormControl}>
      <Text 
        style={useLabel ? styles.AUILabel : styles.AUILabelHide}>
          {fieldName}
      </Text>
      <View style={styles.TextInputWrapper}>
        <TextInput 
          defaultValue={defaultValue}
          multiline={false}
          numberOfLines={1}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
          onPress={onPressClose}
        >
          {closeIcon}
        </TouchableOpacity>
      </View>
      <View>
        <Text>Some error text here</Text>
      </View>
    </View>
  )
}

export {TextInputClearable}