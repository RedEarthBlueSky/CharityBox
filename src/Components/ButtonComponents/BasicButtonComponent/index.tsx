//  Basic Button Components
import { View, Text, Button } from 'react-native'
import React from 'react'

interface BasicButtonProps {
  title: string
  action: () => void
}

const BasicButtonComponent:React.FC<BasicButtonProps> = (props: BasicButtonProps) => {
  return (
    <View>
      <Text>Basic Button Component</Text>
      <Button 
        title={props.title}
        onPress={props.action}
      />
    </View>
  )
}

export { BasicButtonComponent }