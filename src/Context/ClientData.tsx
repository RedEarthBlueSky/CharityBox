//  AddressUIRecProvider
import React, {useState, createContext} from 'react'

export const ClientDataContext = createContext()

//  ============
//  Store records
//  ============

interface ClientDataProps {
  fullname: string
  username: string
  email: string
  mobile: string
  password: string
  status: string
  company: string
  line1: string
  line2: string
  line3: string
  town: string
  county: string
  postcode: string
  country: string
}

interface ClientArgumentProps {
  children: React.ReactNode
}

//  props type is hacky sort it out later
const ClientDataProvider = (props: ClientArgumentProps) => {

  //  create state to store Address Records
  const [clientData, setClientData] = useState<ClientDataProps>({
    "fullname": "",
    "username": "",
    "email": "",
    "mobile": "",
    "password":"",
    "status": "", // Charity, Company or Individual
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
    <ClientDataContext.Provider value={[clientData, setClientData]}>
      {props.children}
    </ClientDataContext.Provider>
  )
}

export { ClientDataProvider }

