import { StyleSheet } from 'react-native'

const cells = {
  level2Height: 150,
  level2Width: 110,
  level1Height: 180,
  level1Width: 130,
  level0Height: 200,
  level0Width: 150,

  level2Left: 650,
  level1Left: 500,
  level0_Left: 330,
  level1_Left: 180,
  level2_Left: 50,
}

export const CStyles = StyleSheet.create({
  carouselWrapper: {
    backgroundColor: 'rgba(132, 216, 240, 0.5)',
    borderRadius: 10,
    height: 200,
    width: '95%',
    marginTop: 20,
    marginBottom: 0,
    paddingTop: 5,
  },
  carouselContainer: {
    // backgroundColor: 'black',
    alignSelf: 'center',
    height: 120,
    alignItems: 'center',
    paddingLeft: 15,
    marginRight: 15, 
  },
})