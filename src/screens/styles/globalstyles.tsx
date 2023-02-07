import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  componentContainer: {
    width: '100%',
  },
  //  At some point need to extract the values from a global styleguide
  H1: {
    fontSize: 40, // XXL
  },
  H1Bold: {
    fontSize: 40, //  XXL
    fontWeight: 'bold',
  },
  H2: {
    fontSize: 32,  // XL
  },
  H2Bold: {
    fontSize: 32,  // XL
    fontWeight: 'bold',
  },
  H3: {
    fontSize: 24,  // L
  },
  H4: {
    fontSize: 18,  // M
  },
  P: {
    fontSize: 16,  // S
  }
})

export default styles