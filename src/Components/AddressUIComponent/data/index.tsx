const clientDetailsData = [
  // key is used for 3 places defaultValue, onChangeText, onPressClose
  {
    label: 'First Name',
    key: 'firstname',
  },
  {
    label: 'Last Name',
    key: 'lastname',
  },
  {
    label: 'Email Address',
    key: 'email',
  },
  {
    //  set to email if required
    //  tickbox
    label: 'Username',
    key: 'username',
  },
  {
    //  set to email if required
    //  tickbox
    label: 'Password',
    key: 'password',
  },
  {
    //  set to email if required
    //  tickbox
    label: 'Confirm Password',
    key: 'confirmpassword',
  },
]

const Titles =[
  'Mr',
  'Mrs',
  'Miss',
  'Ms',
  'Dr',
  'Sir',
  'Reverand',
  'Professor',
  'Specify Other',
  'Lady',
  'None'
]

export { clientDetailsData, Titles }