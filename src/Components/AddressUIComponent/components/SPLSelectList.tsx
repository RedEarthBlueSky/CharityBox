//  SPLSelectList
import { View, Text } from 'react-native'
import React, {useState, useContext} from 'react'
import styles from '../../../Screens/styles/globalstyles'
import { SPLSelectListProps } from '../../Props'

//  Store for address information
import { AddressRecContext } from './AddressRec'

//  ========================================
//  Used to display the search results 
//  ========================================

const SPLSelectList: React.FC<SPLSelectListProps> = ({
  datakey, 
  selectionLines,
  showSearchList,
  setShowSearchList,
}: SPLSelectListProps) => {
  //  Shared Address record store
  const [addressRec, setAddressRec] = useContext(AddressRecContext)

  //  The ID of the currently selected Address
  const [selectedID, setSelectedID] = useState<string>('')

  //  State of the selections box
  const [selectedSomething, setSelectedSomething] = useState<boolean>(false)

  interface IDSelectedProps { target: {value: string }}
  //  When a line is selected remember the ID of the line
  const handleChange = (e: IDSelectedProps) => {
    console.log('Selected: ', e.target.value)
    setSelectedID(e.target.value)
    setSelectedSomething(true)
  }

  //  Confirmed selection of an address line ([Select] button tapped)
  const SPLselected = () => {
    SPLfetchRecord(selectedID)
    console.log('SPL Selected Event: ', selectedID)
    setShowSearchList(false)
  }

  interface RecordDataProps {
    found: number
  }

  //  Fetch address by ID from SP HTTP/JSON API and store
  const SPLfetchRecord = (id: string) => {
    const fetchData = (url: string):Promise<any> => {
      return  fetch(url)
              .then(response => response.json)
              .then((data) => {
                console.log(data)

                if (data.found===0) {
                  console.log('0 ', data.credits_display_text)
                  console.log('Status: ', data.errormessage)
                }

              })
    }
  }





  return (
    <View>
      <Text style={styles.H3Bold}>Search Results</Text>
      <Text style={styles.P}>Datakey: {datakey}</Text>
      <Text style={styles.H4}>List to select address from components</Text>
    </View>
  )
}

export { SPLSelectList }