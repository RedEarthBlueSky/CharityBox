//  Variables - at some point add to .env file
//  Email Validation
const AbstractEmailAPIKey = '0b95b8f74e934242b325bae682762c11'

//  Registeration email verification
export const fetchEmailValidation = async (
    key: string,
    email: string,
    setErrorMessage: any,
    setEmailValid: any,
    emailValid: boolean,
  ) => {
  setErrorMessage('')
  setEmailValid(false)
  //  make sure we have the correct key
  if ( key !== 'email') {
    setErrorMessage('Field error not email input')
    return
  }
  const fetchData = (url: string):Promise<any> => {
    return fetch(url)
          .then((response) => response.json())
          .then((data) => {
            // console.log(JSON.stringify(data, null, 2))
            if (data.error) {
              console.log('Email Validation Error: ', data.error.message)       
              return
            }
            if (data.is_valid_format.value && !emailValid){
              if (data.deliverability==='DELIVERABLE'||'UNKNOWN'||'RISKY'&&data.quality_score>=0.6) {
                console.log(`Email: ${data.email}, Deliverability: ${data.deliverability} FORMAT valid, Quality Score: ${data.quality_score}.`)
                setEmailValid(true)
                console.log('Email is valid')
                return
              }
              if (data.deliverability==='UNDELIVERABLE') {
                setErrorMessage(`${data.deliverability} email please resubmit`)
                return
              } 
              else {
                setErrorMessage(`Email format is invalid please resubmit`)
                return
              }   
            }            
          });}
  const emailValidationLink = `https://emailvalidation.abstractapi.com/v1/?api_key=${AbstractEmailAPIKey}&email=${email}`
  fetchData(emailValidationLink)
}