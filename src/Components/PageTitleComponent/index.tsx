import { View, Text } from 'react-native'
import React from 'react'

import styles from '../../Screens/styles/globalstyles'
import { LineBreakComponent } from '../LineBreakComponent'
import { PageTitleProps } from '../Props'

//  nice fix here for the props error give props to FC
const PageTitleComponent: React.FC<PageTitleProps> = (props: PageTitleProps) => {
  const { title, slug, theme } = props
  return (
    <View>
        <Text style={[styles.H2Bold, {color: theme.color}]}>{title}</Text>
        <Text style={[styles.H4, {color: theme.color}]}>{slug}</Text>
    </View>
  )
}

export { PageTitleComponent }