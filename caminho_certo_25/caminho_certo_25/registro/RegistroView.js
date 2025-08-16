import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistroView() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [tipoSanguineo, setTipoSanguineo] = useState('');
  const [alergia, setAlergia] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const jsonValue = await AsyncStorage.getItem('@registro');
    if (jsonValue) {
      const registro = JSON.parse(jsonValue);
      setNome(registro.nome);
      setDataNascimento(registro.dataNascimento);
      setEndereco(registro.endereco);
      setTipoSanguineo(registro.tipoSanguineo);
      setAlergia(registro.alergia);
    }
  };

  const save = async () => {
    const registro = {
      nome,
      dataNascimento,
      endereco,
      tipoSanguineo,
      alergia,
    };

    const jsonValue = JSON.stringify(registro);

    await AsyncStorage.setItem('@registro', jsonValue);

    alert('Dados salvos com sucesso');
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Nome completo"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        mode="outlined"
        label="Data Nascimento"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
      />
      <TextInput
        mode="outlined"
        label="Endereço"
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />
      <TextInput
        mode="outlined"
        label="Tipo Sanguineo"
        value={tipoSanguineo}
        onChangeText={(text) => setTipoSanguineo(text)}
      />
      <TextInput
        mode="outlined"
        label="Alergias"
        value={alergia}
        onChangeText={(text) => setAlergia(text)}
      />
      <View style={styles.buttons}>
        <Button
          onPress={save}
          mode="contained"
          style={{
            width: '100%',
            backgroundColor: '#24CBAF',
            padding: 5,
          }}>
          SALVAR
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 15,
  },

  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
    paddingTop: 10,
    paddingBottom: 15,
    top: -100,
  },
});
