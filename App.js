import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';

function Header(){
  return(
    <View style={{backgroundColor:"grey"}}>
      <Text style={{textAlign:"center"}}>
        Componente Header
      </Text>
    </View>
  )
}

function Footer(){
  return(
    <View>
      <Text style={styles.Footer}>
        PDM1 ₢ 2024
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

      <Text style = {styles.saudacao}>
        Olá, eu sou...
      </Text>
      <TextInput style = {styles.TextInput} defaultValue = "Digite seu nome"/>

      <Footer/>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {
    justifyContent: 'center',
  },
  saudacao: {
    color: 'green',
  },
  TextInput:{
    height: 30,
    width: 200,
    borderColor: 'blue',
    borderWidith: 1
  },
});
