import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { oStyles, styles } from '../../Styles'

const Stories:React.FC = () => {
  const [storiesData, setStoriesData] = useState<Array<any>>([])
  useEffect(() => {
  }, [])

  return (
    <View style={styles.rowFlexContainer}>
      <Text style={styles.H2}>Stories Component</Text>
    </View>
  )
}

export { Stories }