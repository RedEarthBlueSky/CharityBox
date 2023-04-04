//  this is actually molecule data not organsim
const onPressHandler = () => {console.log('Do we work?')}

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

export const postFooterIcons: { 
  label: string,
  iconName: string, 
  size: number, 
  color: string, 
  badge: boolean,
  onPress: () => void,
}[] =
[
  {
    label: 'Like',
    iconName: 'heart-o', 
    size: 33, 
    color: '#000', 
    badge: false, 
    onPress: onPressHandler,
  },
  {
    label: 'Comment',
    iconName: 'comment-o',
    size: 33,
    color: '#000', 
    badge: false, 
    onPress: onPressHandler,
  },
  {
    label: 'Share',
    iconName: 'share',
    size: 33,
    color: '#000', 
    badge: true, 
    onPress: onPressHandler,
  },
  {
    label: 'Save',
    iconName: 'save',
    size: 33,
    color: '#000', 
    badge: true, 
    onPress: onPressHandler,
  },
]