import styled from 'styled-components/native'
import React from 'react';
import { Pressable ,Text,  View , StyleSheet} from 'react-native';

const colors = {
  background: "#17181A",
  blue: "#29A8FF",
  gray: "#303136",
  lightGray: "#A5A5A5",
  darkBlue: "#005DB2",
  lightBlue: "#1991FF",

}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  
  numberButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },

  containerLightGray: {
    backgroundColor: colors.lightGray,
  },

  textWhite: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
 
  advancedButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 80,
    backgroundColor: colors.gray,
    borderRadius: 5,
  },
  blueButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: colors.darkBlue,
    borderRadius: 5,
  },

  lightBlueBUtton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 176,
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
  },

  grayButton: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
  },

  button: {
    marginTop: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    backgroundColor: 'black',
    borderRadius: 5
  },
  textBlue: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerBlue: {
    backgroundColor: colors.blue,
  }
})


export const Visor = styled.View`
  height: 300px;
`


export const Container = styled.View`
  background: ${colors.background};
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

export const ContainerAdvancedButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* gap: 10; */
  /* display: 'flex'; */
`

export const ContainerRow = styled.View`
  display: flex; 
  /* flex: 1; */
  flex-direction: row;
  justify-content: center; 
`


export const LightBlueButton = ({title }: {title: string}) => {
  return(
      
      <Pressable 
        style = {styles.lightBlueBUtton} 
        onPress = { () => console.log('Botão pressionado')}>
          <View style = {styles.container}>
            <Text style={styles.textWhite}>{title}</Text>
          </View>
            
          
      </Pressable>
    
  )
}

export const AdvancedButton = ({title }: {title: string}) => {
  return(
      
      <Pressable 
        style = {styles.advancedButton} 
        onPress = { () => console.log('Botão pressionado')}>
          <View style = {styles.container}>
            <Text style={styles.textBlue}>{title}</Text>
          </View>
            
          
      </Pressable>
    
  )
}


export const ClearButton = ({title }: {title: string}) => {
  return(
      
      <Pressable 
        style = {styles.grayButton} 
        onPress = { () => console.log('Botão pressionado')}>
          <View style = {styles.container}>
            <Text style={styles.textWhite}>{title}</Text>
          </View>
            
          
      </Pressable>
    
  )
}

export const NumberButton = ({title }: {title: string}) => {
  return(
      
      <Pressable 
        style = {styles.numberButton} 
        onPress = { () => console.log('Botão pressionado')}>
          <View style = {styles.container}>
            <Text style={styles.textBlue}>{title}</Text>
          </View>
            
          
      </Pressable>
    
  )
}


export const BlueButton = ({title }: {title: string}) => {
  return(
      
      <Pressable 
        style = {styles.blueButton} 
        onPress = { () => console.log('Botão pressionado')}>
          <View style = {styles.container}>
            <Text style={styles.textBlue}>{title}</Text>
          </View>
            
          
      </Pressable>
    
  )
}