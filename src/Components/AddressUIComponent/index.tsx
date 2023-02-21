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
  //  My account
  //  https://www.simplylookupconsole.co.uk/A2CustomerAccount/main.aspx?coid=3333347653_30_30_______
  
  // Datakey simplypostcode external public facing app
  const datakey = 'W_5ADFE8B4C9B549918715857FEE048E'
  //  State of Address Selection List normally hidden
  const [showSearchList, setShowSearchList] = useState<boolean>(false)
  //  Display UI errors - remove in live app (?)
  const [errorTxt, setErrorTxt] = useState<string>('')
  //  store for lines to display in List 
  type selectedLinesArray = Array<object>
  const [selectionLines, setSelectionLines] = useState<selectedLinesArray>([])

  //  ============ Simply Postcode SEARCH EVENTS ============  //
  // Search button pressed, get address list from Simply Postcode HTTP
  const SPLSearchButton = (searchBy: string) => {
    //  searchBy= 'zz99' ...  Shows demo data
    console.log('Search Button for:  ', searchBy)
    setErrorTxt('')
    
    const getSelectionLinesFromSPLServer = async () => {
      await SPLFetchList(searchBy)
    }
    getSelectionLinesFromSPLServer()
  }

  //  Fetch list from server for display
  const SPLFetchList = async (postcode: string) => {
    const fetchData = (url: string) => {
      return fetch(url)
            .then((response) => response.json())
            .then((data) => {
              if (data.found==0){
                console.log('0 ' ,data.credits_display_text)
                console.log('errormessage ' ,data.errormessage)
                setErrorTxt(data.credits_display_text)
              } else {
                if (data.recordcount==0){
                  setErrorTxt('Postcode not found')
                  setShowSearchList(false)
                }
                else
                {
                  console.log('Found record: ',data.found)
                  console.log('Status: ',data.credits_display_text)
                  setSelectionLines(data.records)
                  console.log('Data records in state: ', selectionLines)
                  setShowSearchList(true)
                }
              }              
            });}
    const SPLurl = `https://www.simplylookupadmin.co.uk/JSONservice/JSONSearchForAddress.aspx?cross=true&appID=122&datakey=${datakey}&postcode=${postcode}`
    console.log(SPLurl)
    fetchData(SPLurl)
  }


  return (
    <View>
      <Text style={styles.H2Bold}>Address UI Component</Text>
      <AddressRecProvider>
        <SPLSearch 
          SPLSearchButton={SPLSearchButton} 
          errorText={errorTxt} 
        />
        {showSearchList &&
          <SPLSelectList 
            datakey={datakey}
            selectionLines={selectionLines}
            showSearchList={showSearchList}
            setShowSearchList={setShowSearchList}
          />
        }
        {!showSearchList &&
          <AddressUI />  //  there is a 1 added in the code what's this?
        }
      </AddressRecProvider>
    </View>
  )
}

export { AddressUIComponent }