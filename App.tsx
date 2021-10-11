import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Header } from 'react-native-elements';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar
      hidden = {false}
      backgroundColor = "#0066CC"
      translucent = {false}
        networkActivityIndicatorVisible={true} />
      <Header  centerComponent={
      <View >
          <Text style= {styles.headerText} >Alunos: Ruan Tenório de Melo e Natália Morais </Text>
        </View>} />
      <ScrollView style ={styles.container}>

        <View style = {styles.containerText}>
          <Text style= {styles.paragraphTitle}>CS:GO: relembre o primeiro mundial do Brasil com a Luminosity Gaming</Text>
            <Text style = {styles.desc} >Há exatos dois anos, brasileiros conquistavam seu primeiro título de Major e começavam a construir seu legado</Text>
            <View style ={styles.containerImage}>
              <Image style= {styles.image} source={require('./assets/lg3.jpg')} />
              <Text style ={styles.legend}>Foto do palco do MLG Columbus 2016 </Text>
            </View>
          <Text style = {styles.paragraph}>
            03 de abril é um dia histórico para o CS:GO Brasileiro. Há exatos dois anos, a Luminosity Gaming, formada por Gabriel "Fallen" Toledo, Marcelo "coldzera" David, Fernando "fer" Alvarenga,
            Epitácio "TACO" de Melo e Lincoln "fnx" Lau, surpreendia o mundo e conquistava o título do MLG Columbus, o primeiro Major de uma equipe brasileira na modalidade.
            Com a vitória sobre a Natus Vincere na grande final, a equipe brasileira faturou US$ 500 mil, aproximadamente R$ 1,7 milhão. Foi a primeira grande conquista do CS brasileiro desde
            o título da MiBr na Electronic Sports World Cup 2006, ainda no Counter-Strike 1.6.
          </Text>
        </View>


        <View style ={styles.containerText} >
          <Text style= {styles.paragraphTitle}>A campanha</Text>
          <Text style = {styles.paragraph}>
            A história do título da equipe brasileira no MLG Columbus começou com uma campanha avassaladora na fase de grupos.
            Os brasileiros venceram a alemã mousesports e a sueca Ninjas in Pyjamas por 16 a 13 e 16 a 5, respectivamente.
            Ambos os duelos tiveram a Mirage como palco. Nas quartas-de-final, mais um grande desafio: a polonesa Virtus.pro.
            Foi a única partida da competição em que a Luminosity foi derrotada em um mapa, perdendo por 19 a 17 na Cache.
            Entretanto, os brasileiros mostraram seu famoso poder de recuperação e viraram a série de melhor de três com vitórias
            por 16 a 10 na Cobblestone e 16 a 11 na Overpass, avançando para a próxima fase.

            A história do título da equipe brasileira no MLG Columbus começou com uma campanha avassaladora na fase de grupos.
            Os brasileiros venceram a alemã mousesports e a sueca Ninjas in Pyjamas por 16 a 13 e 16 a 5, respectivamente.
            Ambos os duelos tiveram a Mirage como palco. Nas quartas-de-final, mais um grande desafio: a polonesa Virtus.pro. Foi a única partida da competição em que a Luminosity foi derrotada em um mapa, perdendo por 19 a 17 na Cache. Entretanto, os brasileiros mostraram seu famoso poder de recuperação e viraram a série de melhor de três com vitórias por 16 a 10 na Cobblestone e 16 a 11 na Overpass, avançando para a próxima fase.
          </Text>


          <View  style = {styles.containerImage}>
            <Image source={require('./assets/lg1.jpg')} />
            <Text style ={styles.legend}>fnx, fer, coldzera, zews, TACO e FalleN: o elenco da LG no MLG Major: Columbus — Foto: Reprodução/Facebook Luminosity Gaming</Text>
          </View>

          <Text style = {styles.paragraph}>
            Na semifinal, a Luminosity teve pela frente a Team Liquid, em um dos embates mais memoráveis da história do CS:GO competitivo. Os brasileiros venceram os dois mapas (Mirage e Cache) no overtime, com destaque para a inesquecível jogada de coldzera no primeiro mapa. Com 15 a 9 para a Team Liquid no placar, faltando apenas um round para a equipe americana sair na frente no duelo, coldzera conseguiu um 4K impressionante que foi a chave para a reação dos brasileiros. No final das contas, 19 a 15 na Mirage e 19 a 16 na Cache,
            ambas no overtime, garantiram a vaga da Luminosity na grande final. Na grande final, contra a sua grande rival,
            Natus Vincere, os brasileiros surpreenderam e não mostraram muita dificuldade. Após um primeiro mapa equilibrado na Mirage,
            com vitória por 19 a 17 no overtime, a Luminosity atropelou os rivais no segundo jogo e levantou a taça com uma vitória por 16 a 2 na Overpass.
          </Text>
          </View>

        <View  style = {styles.containerText} >
          <Text style={styles.paragraphTitle}>Não parou por aí</Text>
          <Text style ={styles.paragraphLast}>No mesmo ano, a equipe brasileira, já atuando pela SK Gaming, brilhou novamente e garantiu seu segundo título de Major
          consecutivo ao conquistar a ESL One: Cologne 2016, na Alemanha, faturando, mais uma vez, US$ 500 mil e dando
          continuidade ao legado de uma das maiores equipes de CS:GO da história.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  containerImage: {
    flex: 1,
    backgroundColor: '#ededed',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },

  legend: {
    fontSize: 12,
    color: '#262626'
  },
  container: {
    padding: 20,
  },

  containerText: {
    marginTop: 15,
  },

  desc: {
    fontSize: 14,
    textAlign: 'justify'
  },
  paragraph: {
    textAlign: 'justify'
  },
  paragraphTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  headerText: {
    color: 'white',
    fontSize: 14,
    fontWeight:"bold"
  },
  image: {
    width: '100%',
    height: 220
  },
  paragraphLast: {
    paddingBottom: 100,
    textAlign: 'justify'
  }
});
