import React, { useState } from 'react'
import { Container } from './styles'
import { styles } from './styles'
import { View } from 'react-native'
import { Button } from '../../components/Button'
import { Visor } from '../../components/Visor'
import { ClearButton } from '../../components/ClearButton'

const FIRST_LINE = ['7', '8', '9', '-']
const SECOND_LINE = ['4', '5', '6', '+']
const THIRD_LINE = ['1', '2', '3', '*']
const FOURTH_LINE = ['0', '.', '=', '/']

export const Calculator = () => {
  const [text, setText] = useState('')
  const [result] = useState('')

  const handleButtonPress = (text: string) => {
    setText((prevState) => prevState + text)
  }

  const handleClear = () => {
    setText('')
  }

  const handleCalcResult = () => {
    setText(eval(text))
  }

  return (
    <Container>
      <Visor>{text}</Visor>
      <View style={styles.containerButtons}>
        <ClearButton onPress={handleClear} key={'Clear'} title={'Clear'} />
      </View>

      <View style={styles.containerButtons}>
        {FIRST_LINE.map((item, index) => {
          return (
            <Button
              onPress={() => handleButtonPress(item)}
              key={item}
              title={item}
            />
          )
        })}
      </View>
      <View style={styles.containerButtons}>
        {SECOND_LINE.map((item, index) => {
          return (
            <Button
              onPress={() => handleButtonPress(item)}
              key={item}
              title={item}
            />
          )
        })}
      </View>
      <View style={styles.containerButtons}>
        {THIRD_LINE.map((item, index) => {
          return (
            <Button
              onPress={() => handleButtonPress(item)}
              key={item}
              title={item}
            />
          )
        })}
      </View>
      <View style={styles.containerButtons}>
        {FOURTH_LINE.map((item, index) => {
          if (item === '=') {
            return (
              <Button
                onPress={() => handleCalcResult()}
                key={item}
                title={item}
              />
            )
          }
          return (
            <Button
              onPress={() => handleButtonPress(item)}
              key={item}
              title={item}
            />
          )
        })}
      </View>
    </Container>
  )
}
