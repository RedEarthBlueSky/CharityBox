// UK Address Finder Component
import { View, ScrollView, Text, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from '../../Screens/styles/globalstyles'
import { 
  AddressUI,
  SPLSearch,
  SPLSelectList,
 } from './components'
 import { AddressRecProvider } from './components/AddressRec'

const AddressUIComponent: React.FC = () => {
  //  My account https://www.simplylookupconsole.co.uk/A2CustomerAccount/main.aspx?coid=3333347653_30_30_______
  const datakey = 'W_5ADFE8B4C9B549918715857FEE048E'
  const [showSearchList, setShowSearchList] = useState<boolean>(false)
  const [showAddressUI, setShowAddressUI] = useState<boolean>(false)
  const [errorTxt, setErrorTxt] = useState<string>('')
  type selectedLinesArray = Array<object>
  const [selectionLines, setSelectionLines] = useState<selectedLinesArray>([])
 
  // Search button pressed, get address list from Simply Postcode HTTP
  const SPLSearchButton = (searchBy: string) => {
    console.log('Search Button for:  ', searchBy)
    setErrorTxt('')
    
    const getSelectionLinesFromSPLServer = async () => {
      await SPLFetchList(searchBy)
    }
    //  Hide the address details if a new search is made
    setShowAddressUI(false)
    getSelectionLinesFromSPLServer()
  }

  const SPLNoPostcodeProvided = () => {
    setErrorTxt('Please provide a postcode')  
    setShowSearchList(false)
  }

  //  Fetch list from server for display
  const SPLFetchList = async (postcode: string) => {
    setErrorTxt('')
    const fetchData = (url: string):Promise<any> => {
      return fetch(url)
            .then((response) => response.json())
            .then((data) => {
              console.log(data.found, data.recordcount)
              //  had to add data.errormessage qualifier to make it work
              if (data.found==0 && data.errormessage=='No postcode to search for'){
                console.log('0 ' ,data.credits_display_text)
                console.log('Error Message: ' ,data.errormessage)
                setErrorTxt('Please enter a postcode')
              } else {
                if (data.recordcount==0){
                  console.log('Postcode not found')
                  setErrorTxt('Postcode not found')
                  setShowSearchList(false)
                }
                else
                {
                  console.log('Found record: ',data.found)
                  console.log('Status: ',data.credits_display_text)
                  setSelectionLines(data.records)
                  setShowSearchList(true)
                  Keyboard.dismiss()
                }
              }              
            });}


    const SPLurl = `https://www.simplylookupadmin.co.uk/JSONservice/JSONSearchForAddress.aspx?cross=true&appID=122&datakey=${datakey}&postcode=${postcode}`
    console.log(SPLurl)
    fetchData(SPLurl)
  }


  return (
    // View styles to solve ScrollList height problem
    // Added flex: 1 to Register Screen parent to sort this
    <View style={{
      flex: 1,
      }}>
      <AddressRecProvider>
        <SPLSearch 
          SPLSearchButton={SPLSearchButton} 
          errorText={errorTxt} 
          setErrorTxt={setErrorTxt}
          showAddressUI={showAddressUI}
          setShowAddressUI={setShowAddressUI}
        />
        {showSearchList &&
          <SPLSelectList 
            datakey={datakey}
            selectionLines={selectionLines}
            showSearchList={showSearchList}
            showAddressUI={showAddressUI}
            setShowSearchList={setShowSearchList}
            setShowAddressUI={setShowAddressUI}
          />
        }
        {showAddressUI &&
          <AddressUI />
        }
      </AddressRecProvider>
    </View>
  )
}

export { AddressUIComponent }