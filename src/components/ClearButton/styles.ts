import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

export const styles = StyleSheet.create({
  button: {
    height: 80,
    width: '100%',
    backgroundColor: colors.gray,

    marginBottom: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
})
