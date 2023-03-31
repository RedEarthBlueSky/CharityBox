import { StyleSheet } from 'react-native'
import { Text } from '../../Theme'

export const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: Text.bgcolor,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 15,
        paddingTop: 60,
    },
    // ***************************
    // TYPOGRAPHY
    H1: {
        color: Text.color,
        fontSize: Text.XXL,
    },
    H1bold: {
        color: Text.color,
        fontSize: Text.XL,
        fontWeight: 'bold',
    },
    H2: {
        color: Text.color,
        fontSize: Text.XL,
    },
    H2bold: {
        color: Text.color,
        fontSize: Text.XL,
        fontWeight: 'bold',
    },
    H3: {
        color: Text.color,
        fontSize: Text.L,
    },
    H3bold: {
        color: Text.color,
        fontSize: Text.L,
        fontWeight: 'bold',
    },
    H4: {
        color: Text.color,
        fontSize: Text.M,
    },
    H4bold: {
        color: Text.color,
        fontSize: Text.M,
        fontWeight: 'bold',
    },
    P: {
        color: Text.color,
        fontSize: Text.P,
    },
    Pbold: {
      color: Text.color,
      fontSize: Text.P,
      fontWeight: 'bold',
    },
    Psmall: {
      fontSize: Text.S
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
    //  UI
    paragraphDivider: {
      //  View will only accept a height property not lineHeight
      height: 18,
    }
})