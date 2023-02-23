//  SPLSelectList
//  Used to display the search results 
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../../Screens/styles/globalstyles'
import { SPLSelectListProps } from '../../Props'
//  Store for address information
import { AddressRecContext } from './AddressRec'

const SPLSelectList: React.FC<SPLSelectListProps> = ({datakey, selectionLines, showSearchList, setShowSearchList,}: SPLSelectListProps) => {
  //  Shared Address record store
  const [addressRec, setAddressRec] = useContext(AddressRecContext)

  //  The ID of the currently selected Address
  const [selectedID, setSelectedID] = useState<string>('')

  //  State of the selections box
  const [selectedSomething, setSelectedSomething] = useState<boolean>(false)

  //  Check for updates to state - remove for production dev only checkinfg
  useEffect(() => {
    console.log('useEffect state update selectedID is: ', selectedID)
    console.log('useEffect state update selectedSomething is: ', selectedSomething)
    //  this works returns the record but also feels very hacky hmmmm must be a better way
    if (selectedSomething==true && selectedID!='') return SPLselected()
    //  remove for production
    console.log('Error Message: selectedID and selectedSomething have not updated')
  }, [selectedID, selectedSomething])

  //  Get the ID of the line and save it in state use value instead of e.target.value
  const handleChange = (value: string) => {
    console.log('Selected from handleChange is: ', value)
    setSelectedID(value)
    setSelectedSomething(true)
  }

  //  Confirmed selection of an address line ([Select] button tapped)
  const SPLselected = () => {
    SPLfetchRecord(selectedID)
    console.log('SPL Selected Event: ', selectedID)
    setShowSearchList(false)
  }

  //  Fetch address by ID from SP HTTP/JSON API and store
  const SPLfetchRecord = (id: string) => {
    const fetchData = (url: string):Promise<any> => {
      return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log(data)

            if (data.found==0){
              console.log('0 ' ,data.credits_display_text)
              console.log('errormessage ' ,data.errormessage)
            } else {
                console.log('Found record: ',data.found)
                console.log('Status: ',data.credits_display_text)

                //Populate the shared address record for display by React
                setAddressRec(prevAddress => ({
                        ...prevAddress, 
                        company: data.organisation,
                        line1: data.line1,
                        line2: data.line2,
                        line3: data.line3,
                        town: data.town,
                        county: data.county,
                        postcode: data.postcode,
                        country: data.country
                    })) 
            }
            
          });}
    const SPLurl= `https://www.simplylookupadmin.co.uk/JSONservice/JSONGetAddressRecord.aspx?cross=true&appID=122&datakey=${datakey}&id=${id}`
    console.log(SPLurl);
    fetchData(SPLurl); 
  }

  // console.log(selectionLines)

  return (
    <>
      <Text style={styles.H3Bold}>Tap to Select Address</Text>
      <ScrollView style={formStyles.SPLScrollView}>
        {
          selectionLines.map((line, index) => (
              <TouchableOpacity 
                key={line.id}
                style={{}}
                onPress={() => { 
                  console.log('My ID is: ', line.id)
                  handleChange(line.id)
                }}
              >
                  <Text>{line.l}</Text>
              </TouchableOpacity> 
          ))
        }
      </ScrollView>
      <Text style={styles.H3Bold}>End of List</Text>
    </>
  )
}

export { SPLSelectList }

const formStyles = StyleSheet.create({
  SPLSelectListContainer: {
  },
  SPLScrollView: {
  }
})