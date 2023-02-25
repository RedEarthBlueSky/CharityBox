//  AddressUIRecProvider
import React, {useState, createContext} from 'react'
export const AddressRecContext = createContext()

//  ============
//  Store records so the user can edit the values found by Simply Postcode
//  ============

interface AddressRecordProps {
  title: string
  firstname: string
  middlenames: string
  lastname: string
  email: string,
  telephone: string,
  company: string
  line1: string
  line2: string
  line3: string
  town: string
  county: string
  postcode: string
  country: string
  status: string
}

interface AddressArgumentProps {
  children: React.ReactNode
}

//  props type is hacky sort it out later
const AddressRecProvider = (props: AddressArgumentProps) => {

  //  create state to store Address Records
  const [addressRec, setAddressRec] = useState<AddressRecordProps>({
    "title":"",
    "firstname": "",
    "middlenames": "",
    "lastname":"",
    "email": "",
    "telephone": "",
    "company": "",
    "line1": "",
    "line2": "",
    "line3": "",
    "town": "",
    "county": "",
    "postcode": "",
    "country": "",
    "status": "", // Charity, Company or Individual
  })

  return (
    <AddressRecContext.Provider value={[addressRec, setAddressRec]}>
      {props.children}
    </AddressRecContext.Provider>
  )
}

export { AddressRecProvider }

