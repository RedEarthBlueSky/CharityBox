//  SPLSelectList display the search results 
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React, {useState, useContext, useEffect} from 'react'

import styles from '../../../Styles/globalstyles'
import { SPLSelectListProps } from '../../Props'
import { ClientDataContext } from '../../../Context/ClientData'

const SPLSelectList: React.FC<SPLSelectListProps> = ({
  datakey, 
  selectionLines, 
  showSearchList, 
  setShowSearchList,
  showAddressUI,
  setShowAddressUI
}: SPLSelectListProps) => {
  const [clientData, setClientData] = useContext(ClientDataContext)
  const [selectedID, setSelectedID] = useState<string>('')
  const [selectedSomething, setSelectedSomething] = useState<boolean>(false)

  //  Check for updates to state - remove for production dev only checkinfg
  useEffect(() => {
    console.log('useEffect state update selectedID is: ', selectedID)
    console.log('useEffect state update selectedSomething is: ', selectedSomething)
    //  works but feels very hacky hmmmm must be a better way
    if (selectedSomething==true && selectedID!='') return SPLselected()
  }, [selectedID, selectedSomething])

  //  Set ID of line in state
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
            console.log('Data from SPLSelectList: ', data)

            if (data.found==0){
              console.log('0 ' ,data.credits_display_text)
              console.log('errormessage ' ,data.errormessage)
            } else {
                console.log('Found record: ',data.found)
                console.log('Status: ',data.credits_display_text)

                //Populate the shared address record for display by React
                setClientData(prevAddress => ({
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
              setShowAddressUI(true)
            }
            
          });}
    const SPLurl= `https://www.simplylookupadmin.co.uk/JSONservice/JSONGetAddressRecord.aspx?cross=true&appID=122&datakey=${datakey}&id=${id}`
    console.log(SPLurl);
    fetchData(SPLurl); 
  }

  // console.log(selectionLines)

  return (
    <>
      <Text style={styles.H3Bold}>Select Address</Text>
      <ScrollView 
        style={formStyles.SPLScrollView}
      >
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
      <View style={formStyles.SPLSelectListContainer}>
        <Text style={styles.H4Bold}>Select address from above</Text>
      </View>
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