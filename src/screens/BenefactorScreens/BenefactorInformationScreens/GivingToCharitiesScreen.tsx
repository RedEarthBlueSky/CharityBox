import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles/globalstyles'

const GivingToCharitiesScreen = () => {
  //  run this list as drop downs
  return (
    <View>
      <Text style={styles.H1Bold}>Giving To Charities</Text>
      <Text style={styles.H3}>
        Together we can make sure charities continue their good work.
      </Text>
      <Text style={styles.H2Bold}>
        Donate Now
      </Text>
      <Text style={styles.H3}>
        Charity Account:  Open account online link.
      </Text>
      <Text style={styles.H3}>
        Start a Charity = Open a Charitable Trust.
        Manage the opening of a Charity including the setup of a limited company.
        This will involve a flat fee and access to the managment panel.
      </Text>
      <Text style={styles.H3}>
        Open a Legacy Service.  
        A legacy is a gift you leave in your will to a charity organisation.
        The Charity Box legacy service can also include the provision
        of a free will.
      </Text>
      <Text style={styles.H3}>
        Donar Funding
      </Text>
      <Text style={styles.H3}>
        Philanthropy
      </Text>
      <Text style={styles.H3}>
        Resource Center
      </Text>
    </View>
  )
}

export { GivingToCharitiesScreen }