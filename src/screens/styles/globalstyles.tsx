import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  componentContainer: {
    width: '100%',
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
  }
})

export default styles