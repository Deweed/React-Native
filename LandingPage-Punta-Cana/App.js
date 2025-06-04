import { Text, View, StyleSheet, Image } from 'react-native';

import punta from './assets/punta.png';
import star from './assets/estrela.png';
import miranha from './assets/miranha.png';
import batman from './assets/batman.png';
import eve from './assets/eve.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={punta} style={{ width: '100%', height: 300 }} />
      <Text style={styles.title}>PUNTA CANA</Text>
      <Text style={styles.text}>
        4 hóspedes - 2 quartos - 2 camas - 1 banheiro
      </Text>
      <View style={styles.card}>
        <Image source={star} style={{ width: '05%', height: 20 }} />
        <Text style={styles.text}>4,70 (61 Comentários) </Text>
      </View>
      
      <View style={styles.avaliar}>
        <View style={styles.card}>
          <Image
            source={batman}
            style={{ width: '18%', height: 70, borderRadius: 50 }}
          />
          <View style={styles.column}>
            <Text style={styles.nome}>Batimão</Text>
            <Text style={styles.text}>março de 2025</Text>
          </View>
        </View>
        <Text style={[styles.text, { marginTop: 10}]}>
          Excelente localização para um plano contra o Superman, desci o cacete
          naquele otário!
        </Text>
      </View>

      <View style={styles.avaliar}>
        <View style={styles.card}>
          <Image
            source={miranha}
            style={{ width: '18%', height: 70, borderRadius: 50 }}
          />
          <View style={styles.column}>
            <Text style={styles.nome}>Amigão da Vizinhança</Text>
            <Text style={styles.text}>fevereiro de 2025</Text>
          </View>
        </View>
        <Text style={[styles.text, { marginTop: 10}]}>
          Usei uma vez para sair com a Mary Jane, ela adorou! Só não tem muitos lugares para lançar minha teia.
        </Text>
      </View>

      <View style={styles.avaliar}>
        <View style={styles.card}>
          <Image
            source={eve}
            style={{ width: '18%', height: 70, borderRadius: 50 }}
          />
          <View style={styles.column}>
            <Text style={styles.nome}>Eve Atômica</Text>
            <Text style={styles.text}>Dezembro de 2019</Text>
          </View>
        </View>
        <Text style={[styles.text, { marginTop: 10 }]}>
          Estou esperando o Invencivel me levar novamente, realmente o lugar é maravilhoso
          pena que sempre aparece algum vilão.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Times New Roman',
  },

  card: {
    //flex: 0.1,
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
    fontFamily: 'arial',
    color: '#5e5e5e',
  },

  nome: {
    paddingLeft: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'arial',
  },

  column: {
    flexDirection: 'column',
    marginLeft: 10,
  },

  avaliar: {
    padding: 10,
  }
});
