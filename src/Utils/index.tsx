//  Client UI Utils

//  check the phone is connected to a network
export const fetchDeviceConnected = async (
    NetInfo:any, 
    setIsConnected:any,
    isConnected: boolean,
    setErrorMessage: any,
  ) => {
  const response = await NetInfo.fetch()
  if (response.isConnected) setIsConnected(true)
  if (!isConnected) { 
    setErrorMessage('Please connect to a network to continue') 
    return
  }
}

//  Handle text updates TextInput
export const onChangeTextHandler = (
  newText: string, 
  key: string,
  setClientData: any,
) => {
  setClientData((prevState: any) => ({
    ...prevState, [key]: newText
  }))
}

//  when x pressed clear TextInput
export const onPressCloseHandler = (
  key:string,
  setClientData:any
) => (
  setClientData((prevState: any) => ({
    ...prevState, [key]: ''
  }))
)