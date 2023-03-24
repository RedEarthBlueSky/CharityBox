import { StyleSheet, Dimensions } from 'react-native'
import { prcntWidthToNum } from '../Utils/Atoms'

const prcntResult = prcntWidthToNum(90, Dimensions)

//  Atom Styles Only
export const aStyles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    marginLeft: 10,
  },
  unreadBadge: {
    alignItems: 'center',
    backgroundColor: '#ff3250',
    bottom: 13,
    position: 'absolute',
    left: 15,
    height: 20,
    minWidth: 25,
    borderRadius: 25,
    justifyContent: 'center',
    zIndex: 100,
  },
  unreadBadgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  //  story item Styles
  //  transfter to Organism Stypes
  storyScrollWrapper: {
    // backgroundColor: 'red',
    marginTop: 20,
    height: 120,
    marginBottom: 0,
  },
  storyScrollWrapperAuto: {
    marginTop: 0,
    height: 120,
    width: prcntResult,
  },
  scrollviewWrapper: {
    width: prcntResult,
  },
  storyContainer: {
    // backgroundColor: 'black',
    height: 120,
    alignItems: 'center',
    paddingLeft: 15,
    marginRight: 15, 
  },
  storyContainerAuto: {
    height: 120,
    alignItems: 'center',
    paddingLeft: 15,
    marginRight: 15, 
  },
  storyItemImage: {
    borderColor: 'orange',
    borderRadius: 40,
    borderWidth: 5,
    height: 80,
    width: 80,
    marginRight: 10,
  },
  storyItemText: {
    // backgroundColor: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
})

const storyContainer = {
  // backgroundColor: 'black',
  height: 120,
  alignItems: 'center',
  paddingLeft: 15,
  marginRight: 15, 
}