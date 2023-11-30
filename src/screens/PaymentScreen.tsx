import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const PaymentScreen = () => {
  const {top} = useSafeAreaInsets()

  const [variable, setVariable] = useState(secondVariable)
  return (
    <ScrollView>
      <Text>Pantalla de pagoi</Text>
    </ScrollView>
  )
}

export default PaymentScreen