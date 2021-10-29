import React from 'react'

import { View, ViewProps, ViewPropTypes, Text } from 'react-native'

import { styles } from './styles'

type Props = ViewProps & {
  children: React.ReactNode
}

export function Visor({ children }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}
