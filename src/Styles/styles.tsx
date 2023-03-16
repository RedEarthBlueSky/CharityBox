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
    rowFlexContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '100%',
    },
    colFlex: {
      flexDirection: 'column',
      // backgroundColor: 'blue',
    },
})