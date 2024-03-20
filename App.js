import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

function Header() {
  return (
    <View style={{ backgroundColor: 'grey', flex: 1 }}>
      <Text style={{ textAlign: 'center' }}>Componente Header</Text>
    </View>
  );
}

function Footer() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.Footer}>PDM1 ₢ 2024</Text>
    </View>
  );
}

const DetalhaProduto = (props) => {
  return (
    <View style={{ borderWidth: 1 }}>
      <Text>Produto: {props.nome}</Text>
      <Text>Produto: {props.marca}</Text>
      <Text>Produto: {props.preco}</Text>
      <Text>Produto: {props.quantidade}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <View>
        <View>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/I/81v2Z9vg6eL._AC_UF894,1000_QL80_.jpg',
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <DetalhaProduto
          nome="Mochila"
          marca="Dell"
          preco="R$99,00"
          quantidade={1}
        />

        <View>
          <Image
            source={{
              uri: 'https://http2.mlstatic.com/D_NQ_NP_931763-MLA32845594767_112019-O.webp',
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <DetalhaProduto
          nome="Mouse"
          marca="Razer"
          preco="R$150,00"
          quantidade={1}
        />

        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yJ0zQ-_FqFe3Ld3kmeOKZeTf8vvJ_nWqFw&usqp=CAU',
            }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <DetalhaProduto
          nome="Memória RAM"
          marca="Kingston"
          preco="R$200,00"
          quantidade={1}
        />
      </View>

      <View style={{ flex: 10 }}>
        <Text>Nome:</Text>
        <TextInput
          style={{
            height: 30,
            width: 200,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          defaultValue="Insira o texto aqui"
        />

        <Text>Idade:</Text>
        <TextInput
          style={{
            height: 30,
            width: 200,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          defaultValue="Insira o texto aqui"
        />

        <Text>Sexo:</Text>
        <TextInput
          style={{
            height: 30,
            width: 200,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          defaultValue="Insira o texto aqui"
        />

        <Text>Curso:</Text>
        <TextInput
          style={{
            height: 30,
            width: 200,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          defaultValue="Insira o texto aqui"
        />

        <Text>Semestre:</Text>
        <TextInput
          style={{
            height: 30,
            width: 200,
            borderColor: 'blue',
            borderWidth: 1,
          }}
          defaultValue="Insira o texto aqui"
        />
      </View>
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  Footer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  TextInput: {
    height: 30,
    width: 200,
    borderColor: 'blue',
    borderWidith: 1,
  },
});
