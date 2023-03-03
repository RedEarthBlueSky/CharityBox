export interface PageTitleProps {
  title: string
  slug: string
  theme: {
    background: string
    color: string
    theme: string
  }
}

type selectedLinesArrayProps = Array<object>
export interface SPLSelectListProps {
  datakey: string
  selectionLines: selectedLinesArrayProps
  showSearchList: boolean
  setShowSearchList: selectedLinesArrayProps
  showAddressUI: boolean
  setShowAddressUI: selectedLinesArrayProps
}

export interface TextInputClearableProps {
  fieldName: string
  placeholder: string
  defaultValue: string
  isUsername: string
  onChangeText: () => void
  onPressClose: () => any
}
