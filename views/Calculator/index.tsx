import React from 'react';
import {Visor, Container, ContainerRow,ClearButton,NumberButton, LightBlueButton, BlueButton ,ContainerAdvancedButtons, AdvancedButton} from './styles';

export const Calculator = () => {
  
  return (
  <Container>
    <Visor/>
    <ContainerAdvancedButtons>
      <AdvancedButton  title="e"/>
      <AdvancedButton  title="&Mu;"/>
      <AdvancedButton title="sin"/>
      <AdvancedButton title="deg"/>
    </ContainerAdvancedButtons>
    <ContainerRow>
      <ClearButton title = "Ac"/>
      <ClearButton title = "C"/>
      <BlueButton title = "/"/>
      <BlueButton title = "*"/>
      
    </ContainerRow>
    <ContainerRow> 
      <NumberButton title = "7"/>
      <NumberButton title = "8"/>
      <NumberButton title = "9"/>
      <BlueButton title = "-"/>
    </ContainerRow>

    <ContainerRow> 
      <NumberButton title = "4"/>
      <NumberButton title = "5"/>
      <NumberButton title = "6"/>
      <BlueButton title = "+"/>
    </ContainerRow>
    <ContainerRow> 
      <NumberButton title = "1"/>
      <NumberButton title = "2"/>
      <NumberButton title = "3"/>
      <BlueButton title = "="/>
    </ContainerRow>
    <ContainerRow> 
      <NumberButton title = "0"/>
      <NumberButton title = "."/>
      <LightBlueButton title = "="/>
    </ContainerRow>
    {/* <ContainerLastRow>

    </ContainerLastRow> */}
    
  </Container>
  
  )
}