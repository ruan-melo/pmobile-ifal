import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    height: 330,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  text: {
    color: colors.blue,
    fontSize: 36,
    textAlign: 'right',
  },
})
