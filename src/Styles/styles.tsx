import { StyleSheet } from 'react-native'
import { Theme } from '../Theme'

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Theme.bgcolor,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingTop: 60,
    },
    // ***************************
    // TYPOGRAPHY
    H1: {
        color: Theme.color,
        fontSize: Theme.XXL,
    },
    H1bold: {
        color: Theme.color,
        fontSize: Theme.XL,
        fontWeight: 'bold',
    },
    H2: {
        color: Theme.color,
        fontSize: Theme.XL,
    },
    H2bold: {
        color: Theme.color,
        fontSize: Theme.XL,
        fontWeight: 'bold',
    },
    H3: {
        color: Theme.color,
        fontSize: Theme.L,
    },
    H3bold: {
        color: Theme.color,
        fontSize: Theme.L,
        fontWeight: 'bold',
    },
    P: {
        color: Theme.color,
        fontSize: Theme.P,
    },
    Pbold: {
      color: Theme.color,
      fontSize: Theme.P,
      fontWeight: 'bold',
    },
    //  END TYPOGRAPHY
    //  ***************************
    logo: {
      width: 60,
      height: 60,
      marginRight: 10,
    },
    rowFlexContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '100%',
    },
    colFlex: {
      display: 'flex',
      flexDirection: 'column',
      // backgroundColor: 'blue',
    },
    iconContainer: {
      // backgroundColor: 'red',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 15,
      paddingTop: 5,
      width: '42%',
    },
    icon: {
      height: 30,
      width: 30,
      marginLeft: 10,
    },
})