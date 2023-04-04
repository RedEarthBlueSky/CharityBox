import { StyleSheet, Dimensions } from 'react-native'
import { prcntWidthToNum } from '../../Utils/Atoms'

const screenWidth = Dimensions.get('window').width

const prcntResult = prcntWidthToNum(92, Dimensions)

export const oStyles = StyleSheet.create({
  autoScrollingContainer: {
    alignItems: "center",
    backgroundColor: "#a4e0fc",
    borderRadius: 10,
    // height: 140,
    marginHorizontal: 0,
    marginVertical: 20,
  },
  postHeaderRowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postsContainer: {
    // backgroundColor: 'blue',
    // height: 120,
    paddingLeft:0,
    width: prcntResult,
  },
  postContainer: {
    borderTopWidth: 2,
    borderTopColor: 'grey',
    marginTop: 20,
    flexGrow: 1,
    //  container must have height to make it scroll
  },
  postHeaderWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  postHeaderProfileImage: {
    borderColor: 'orange',
    borderRadius: 40,
    borderWidth: 2,
    height: 40,
    width: 40,
    marginTop: 5,
    marginRight: 5,
  },
  postHeaderText: {
  }
})