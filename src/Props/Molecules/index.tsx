interface IconObjectProps {
  label: string
  iconName: string
  size: number
  color: string
  badge: boolean
  unread: number
  onPress: () => void
}

export interface IconDataProps {
  width: number
  [key:string]: IconObjectProps
}

export interface IconButtonProps {
  label: string
  size: number
  iconName: string
  color: string
  badge: boolean
  unread: number
  onPress: () => void
}