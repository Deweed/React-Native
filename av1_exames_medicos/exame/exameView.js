import {useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import { findAll, deleteById } from './exameAPI';
import Card from './Card';

export default function ExameView({ navigation }) {
  const [listExames, setListExames] = useState([]);

  const consultar = async () => {
    try {
      let exame = await findAll();
      exame = exame.sort((c1, c2) => c1.data.localeCompare(c2.data));
      setListExames(exame);
    } catch (err) {
      alert(err.message);
    }
  };

  const excluir = async (id) => {
    await deleteById(id);
    alert('Exame removido com sucesso!');
    await consultar();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marquinhos Médicos</Text>
      <Text style={styles.subtitle}>O melhor centro médico da cidade</Text>

      <FlatList
        data={listExames}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            paciente={item.paciente}
            data={item.data}
            preco={item.preco}
            descricao={item.descricao}
            onPress={() => {}}
            onDelete={() => excluir(item.id)}
          />
        )}
        contentContainerStyle={styles.listContent}
      />

      <View style={styles.buttonContainer}>
        <Button onPress={consultar} mode="contained" buttonColor="#00FF00">
          LISTAR EXAMES
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#f0f8ff', 
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },

  listContent: {
    paddingBottom: 20,
  },

  buttonContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});
