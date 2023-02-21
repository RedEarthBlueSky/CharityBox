//  SPLSelectList
import { View, Text } from 'react-native'
import React, {useState, useContext} from 'react'
import styles from '../../../Screens/styles/globalstyles'
import { SPLSelectListProps } from '../../Props'

//  ========================================
//  Used to display the search results 
//  ========================================

const SPLSelectList: React.FC<SPLSelectListProps> = ({
  datakey, 
  selectionLines,
  showSearchList,
  setShowSearchList
}: SPLSelectListProps) => {
  return (
    <View>
      <Text style={styles.H3Bold}>Search Results</Text>
      <Text style={styles.P}>Datakey: {datakey}</Text>
      <Text style={styles.H4}>List to select address from components</Text>
    </View>
  )
}

export { SPLSelectList }