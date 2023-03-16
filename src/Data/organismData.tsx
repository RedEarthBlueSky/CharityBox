
//  How to get an event handler 
//  From an organism to a molecule to an atom WOO HOO!
const onPressHandler = () => {console.log('Do we work?')}
//  Data for the Icons Molecule of the Header Component
export const headerIconsData: { 
    iconName: string, 
    size: number, 
    color: string, 
    badge: boolean,
    unread: number,
    onPress: () => void,
  }[] =
[
{
  iconName: 'plus-square-o', 
  size: 30, 
  color: '#000', 
  badge: false, 
  unread: 0,
  onPress: onPressHandler,
},
{
  iconName: 'heart-o',
  size: 28,
  color: '#000', 
  badge: false, 
  unread: 0,
  onPress: onPressHandler,
},
{
  iconName: 'superpowers',
  size: 28,
  color: '#000', 
  badge: true, 
  unread: 32,
  onPress: onPressHandler,
},
]