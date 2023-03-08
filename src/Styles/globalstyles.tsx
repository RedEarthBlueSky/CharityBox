import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  MainWrapper: {
    width: '100%', //  set this in em?
    height: '100%',
    padding: 0,
    margin: 0,
  },
  container: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    width: '100%',
  },
  componentContainer: {
    width: '100%',
  },

  SPLForm: {
    marginBottom: 10,
  },
  FormControl: {
    marginHorizontal: 0,
    marginVertical: 0,
  },
  AUITextInput: {
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    color: 'grey',
    width: '90%',
    height: 40,
    marginLeft: 10,
    paddingLeft: 10,
  },
  TextInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#C7C7CD',
    borderBottomWidth: 2,
    color: 'grey',
    width: '100%',
    height: 60,
    paddingLeft: 10,
  },
  TextInputWrapperText: {
    fontSize: 18,
  },


  //  At some point need to extract the values from a global styleguide
  H1: {
    fontSize: 38, // XXL
  },
  H1Bold: {
    fontSize: 38, //  XXL
    fontWeight: 'bold',
  },
  H2: {
    fontSize: 30,  // XL
  },
  H2Bold: {
    fontSize: 30,  // XL
    fontWeight: 'bold',
  },
  H3: {
    fontSize: 22,  // L
  },
  H3Bold: {
    fontSize: 22,  // L
    fontWeight: 'bold',
  },
  H4: {
    fontSize: 18,  // M
  },
  H4Bold: {
    fontSize: 18,  // M
    fontWeight: 'bold',
  },
  P: {
    fontSize: 16,  // S
  },

  //  SPL styles
  SPLheader: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 30,
    width: '100%'
  },
  formControl: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    marginTop: 2,
    width: '100%'
  },
  SPLInputLabel: {
    fontSize: 18,
    marginBottom: 5,
  },
  SPLTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    color: 'grey',
    fontSize: 18,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  JoinTextInput: {
    color: '#424242',
    fontSize: 18,
    fontWeight: 'bold',
    height: 40,
    paddingHorizontal: 5,
    paddingVertical: 7,
  },
  SPLbtn: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#34a4eb',
    borderColor: '#34a4eb',
    borderWidth: 1,
    borderRadius: 10,
    //  cursor: 'pointer', for webapp if implemented
    height: 42,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  SPLButtonText: {
    color: 'white',
    fontSize: 18,
  },
  SPLerrText: {
    color: 'red',
    fontSize: 18,
  },
  SubmitTO: {
    backgroundColor: '#3495eb',
    borderRadius: 3,
    borderColor: '#3495eb',
    borderWidth: 2,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft: 0,
  },
  TOText: {
    fontSize: 18,
    color: 'white',
  },
  clientDetailsWrapper: {
    borderWidth: 2,
    borderColor: '#C7C7CD',
    borderBottomWidth: 0,
    margin: 0,
    padding: 0,
  }
})

export default styles