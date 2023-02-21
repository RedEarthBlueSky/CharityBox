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
}
