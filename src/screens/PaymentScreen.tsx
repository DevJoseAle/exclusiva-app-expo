import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const PaymentScreen = () => {
  const {top} = useSafeAreaInsets()
  return (
    <ScrollView>
      <Text>PaymentScreen</Text>
    </ScrollView>
  )
}

export default PaymentScreen