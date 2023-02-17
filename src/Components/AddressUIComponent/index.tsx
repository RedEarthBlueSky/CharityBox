// UK Address Finder Component
import { View, Text, DatePickerAndroid } from 'react-native'
import React, { useState } from 'react'
import styles from '../../Screens/styles/globalstyles'
import { 
  AddressUI,
  SPLSearch,
  SPLSelectList,
 } from './components'
 import { AddressRecProvider } from './components/AddressRec'

const AddressUIComponent: React.FC = () => {
  // VARIABLE(S?)Datakey simplypostcode external use for a public facing app
  const datakey = 'W_5ADFE8B4C9B549918715857FEE048E'

  //  State of Address Selection List normally hidden
  const [showSearchList, setShowSearchList] = useState<boolean>(false)

  //  Display UI errors - remove in live app (?)
  const [errorTxt, setErrorTxt] = useState<string>('')

  //  store for lines to display in List 
  type selectedLinesArray = Array<object>
  const [selectionLines, setSelectionLines] = useState<selectedLinesArray>([])

  //  ============ Simply Postcode SEARCH EVENTS ============  //

  // Search button pressed, get list of address for Postcode from Simply Postcode HTTP
  const SPLSearchButton = (searchBy: string) => {
    //  searchBy= 'zz99' ...  Shows demo data
    console.log('Search Button for:  ', searchBy)
    setErrorTxt('')
    
    const getSelectionLinesFromSPLServer = async () => {
      await SPLFetchList(searchBy)
    }
    getSelectionLinesFromSPLServer()
  }

  interface SPLFetchListProps {
    postcode: string
    url: string
    data: {
      found: number
      credits_display_text: string
      errormessage: string
      url: string
    }
  }

  //  Fetch list from server for display
  const SPLFetchList = async (postcode: string) => {
    const fetchData = (url: string): Promise<void> => {
      return  fetch(url)
              .then((data) => {
                if (data.found === 0) {
                  console.log('0 data returned: ', data.credits_display_text)
                  console.log('Errormessage: ', data.errormessage)
                  setErrorTxt(data.credits_display_text)
                } 
                if (data.recordcount === 0) {
                  setErrorTxt('Postcode not found')
                  setShowSearchList(false)
                }
                else
                {
                  console.log('Found record:  ', data.found)
                  console.log('Status: ', data.credits_display_text)
                  setSelectionLines(data.records)
                  setShowSearchList(true)
                }
              })} 
    const SPLurl = `https://www.simplylookupadmin.co.uk/JSONservice/JSONSearchForAddress.aspx?cross=true&appID=122&datakey=${datakey}&postcode=${postcode}`
    console.log(SPLurl)
    fetchData(SPLurl)
  }


  return (
    <View>
      <Text style={styles.H2Bold}>Address UI Component</Text>
      <SPLSearch />
      <SPLSelectList />
      <AddressUI />
      <Text>
        This example shows how to implements a Postcode address Finder
        using React Native.  It returns example addresses no matter what
        is entered as  search Postcode.  The UI is customizable for the developer.
      </Text>
    </View>
  )
}

export { AddressUIComponent }