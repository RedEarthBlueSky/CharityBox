//  AddressUIRecProvider
import React, {useState, createContext} from 'react'

export const AddressRecContext = createContext()

//  ============
//  AdressProvider is used to store the address info RECORDS to displa on the page so the user
//  can edit the values found by Simply Postcode
//  ============

interface AddressRecordProps {
  company: string
  line1: string
  line2: string
  line3: string
  town: string
  county: string
  postcode: string
  country: string
}

interface AddressArgumentProps {
  children: React.ReactNode
}

//  props type is hacky sort it out later
const AddressRecProvider = (props: AddressArgumentProps) => {

  //  create state to store Address Records
  const [addressRec, setAddressRec] = useState<AddressRecordProps>({
    "company": "",
    "line1": "",
    "line2": "",
    "line3": "",
    "town": "",
    "county": "",
    "postcode": "",
    "country": "",
  })

  return (
    <AddressRecContext.Provider value={[addressRec, setAddressRec]}>
      {props.children}
    </AddressRecContext.Provider>
  )
}

export { AddressRecProvider }

