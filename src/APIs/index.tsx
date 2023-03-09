  export const fetchEmailValidation = async (
    email: string,
    setErrorMessage: any,
    ) => {
    setErrorMessage('')
    const fetchData = (url: string):Promise<any> => {
      return fetch(url)
            .then((response) => response.json())
            .then((data) => {
              //  JSON.stringify(data, null, 2) tidy up the console
              //  to make data more readable
              console.log(JSON.stringify(data, null, 2))
              if (data.error) {
                console.log('Email Validation Error: ', data.error.message)       
                return
              }
              if (data.is_valid_format.value){
                if  ( // nest the following ?
                      data.deliverability == 'DELIVERABLE'  ||
                      data.deliverability == 'UNKNOWN'      ||
                      data.deliverability == 'RISKY'        &&
                      //  sent email to Abstract to get the median quality score
                      data.quality_score  >= 0.6
                    )
                {
                  console.log(
                      `
                        Email: ${data.email}, 
                        Deliverability: ${data.deliverability}, 
                        FORMAT valid, 
                        Quality Score: ${data.quality_score}.
                      `
                    )
                } else {
                  setErrorMessage(`${data.deliverability} email please resubmit`)
                  return
                }   
              } else {
                setErrorMessage(`Email format is invalid please resubmit`)
                return
              }            
            });}
    const AbstractEmailAPIKey = '0b95b8f74e934242b325bae682762c11'
    const emailValidationLink = `https://emailvalidation.abstractapi.com/v1/?api_key=${AbstractEmailAPIKey}&email=${email}`
    fetchData(emailValidationLink)
  }