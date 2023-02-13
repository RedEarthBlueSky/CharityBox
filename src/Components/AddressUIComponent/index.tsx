// UK Address Finder Component
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from '../../Screens/styles/globalstyles'
import { 
  AddressUI,
  AddressUIRecProvider,
  SPLSearch,
  SPLSelectList,
 } from './components'
import { LineBreakComponent } from '../LineBreakComponent'

const AddressUIComponent: React.FC = () => {
  // Datakey www.simplypostcode.com for external use
  const datakey = 'W_5ADFE8B4C9B549918715857FEE048E'

  //  Visible State of the Address Selection List which is normally hidden
  const [showSearchList, setShowSearchList] = useState<boolean>(false)
  //  Display errors in UI - remove in live app (???)
  const [errorTxt, setErrorTxt] = useState<string>('')
  //  store for lines to display in List 
  type selectedLinesArray = Array<object>
  const [selectionLines, setSelectionLines] = useState<selectedLinesArray>([])



  return (
    <View>
      <Text style={styles.H2Bold}>Address UI Component</Text>
      <SPLSearch />
      <LineBreakComponent />
      <SPLSelectList />
      <LineBreakComponent />
      <AddressUI />
      <LineBreakComponent />
      <AddressUIRecProvider />
    </View>
  )
}

export { AddressUIComponent }