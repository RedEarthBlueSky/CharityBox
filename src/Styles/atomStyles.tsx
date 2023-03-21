import { StyleSheet } from 'react-native'

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
    backgroundColor: '#000',
    borderRadius: 10,
    height: 120,
    marginTop: 20,
    width: '95%',
  },
  storyContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 120,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  storyItemWrapper: {
    borderColor: 'orange',
    borderRadius: 40,
    borderWidth: 5,
    height: 80,
    width: 80,
    marginRight: 10,
  },
  storyItemText: {
    // backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
})