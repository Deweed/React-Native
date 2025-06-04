import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Card({ paciente, data, preco, descricao, onPress, onDelete, }) {

  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.title}>Informações do Exame</Text>
          <Text style={styles.text}>Data: {data}</Text>
          <Text style={styles.text}>Preço: R${preco}</Text>
          <Text style={styles.text}>Descrição: {descricao}</Text>
        </View>

        <View style={styles.linha} />

        <View style={styles.info}>
          <Text style={styles.title}>Paciente</Text>
          <Text style={styles.text}>Nome: {paciente.nome}</Text>
          <Text style={styles.text}>RG: {paciente.rg}</Text>
          <Text style={styles.text}>Email: {paciente.email}</Text>
        </View>

        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <AntDesign name="deleteuser" size={20} color="darkred" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  card: {
    padding: 15,
  },

  info: {
    marginBottom: 10,
  },

  title: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },

  text: {
    fontSize: 14,
    marginVertical: 2,
    color: '#555',
  },

  linha: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },

  deleteButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
