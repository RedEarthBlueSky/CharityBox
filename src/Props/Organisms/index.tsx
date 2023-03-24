import { ViewStyle, StyleProp } from "react-native"
export interface AutoScrollingProps {
  children: any,  // React.ReactElement<any> ???
  style?: StyleProp<ViewStyle>
  endPaddingWidth?: number
  duration?: number
  delay?: number
  isLTR: boolean
}