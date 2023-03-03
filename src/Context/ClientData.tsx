//  AddressUIRecProvider
import React, {useState, createContext} from 'react'

export const ClientDataContext = createContext()

//  ============
//  Store records
//  ============

interface ClientDataProps {
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

interface ClientArgumentProps {
  children: React.ReactNode
}

//  props type is hacky sort it out later
const ClientDataProvider = (props: ClientArgumentProps) => {

  //  create state to store Address Records
  const [clientData, setClientData] = useState<ClientDataProps>({
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
    <ClientDataContext.Provider value={[clientData, setClientData]}>
      {props.children}
    </ClientDataContext.Provider>
  )
}

export { ClientDataProvider }

