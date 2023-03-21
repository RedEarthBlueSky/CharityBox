import { StyleSheet, Dimensions } from 'react-native'
//  get width or screen
const screenWidth = Dimensions.get('screen').width
//  return width of screen as per a percentage as a number
const percentage = (percent: number, total: number) => {
  let result = ((percent / 100) * total).toFixed(2)
  return parseInt(result)
}
const percentResult = percentage(90, screenWidth)

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
    marginTop: 20,
    height: 170,
  },
  scrollviewWrapper: {
    width: '94%',
  },
  storyContainer: {
    // backgroundColor: 'black',
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