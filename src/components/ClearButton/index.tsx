import React from 'react'
import {
  ColorValue,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  color?: ColorValue
  backgroundColor?: ColorValue
}

export const ClearButton = ({
  title,
  color,
  backgroundColor,
  ...rest
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        // {backgroundColor}
      ]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text
        style={{ ...styles.title, color: color ? color : styles.title.color }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
