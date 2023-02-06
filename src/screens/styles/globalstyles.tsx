import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  lightcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  darkcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    color: 'white',
  },
  H1: {
    fontSize: 40,
  },
  H1Bold: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  H2: {
    fontSize: 30,
  },
  H2Bold: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  H3: {
    fontSize: 22,
  },
  P: {
    fontSize: 16,
  }
})

export default styles