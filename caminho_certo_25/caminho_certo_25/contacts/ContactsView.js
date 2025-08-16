import { useEffect, useLayoutEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import { Button, PaperProvider, Portal, Dialog, TextInput } from 'react-native-paper';

import Card from './Card';
import MaskInput, {Masks} from 'react-native-mask-input';
import { findAll, deleteById, insert, update } from './ContactsApi';

export default function ContactsView({ navigation }) {
  const [listContacts, setListContacts] = useState([]);

  const [id, setId] = useState(null);
  const [tipo, setTipo] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    consultar();
  }, []);

  const consultar = async () => {
    try {
      let contatos = await findAll();
      contatos = contatos.sort((c1, c2) => c1.nome.localeCompare(c2.nome));

      console.log(contatos);

      setListContacts(contatos);
    } catch (err) {
      alert(err.message);
    }
  };

  const excluir = async (id) => {
    console.log('Excluindo o contato', id);
    await deleteById(id);

    alert('Contato removido com sucesso!');

    await consultar();
  };

  const salvar = async () => {
    if (id) {
      await update(id, tipo, nome, telefone);

      alert('Contato foi alterado com sucesso!');

      await consultar();
    } else {
      const novoContato = await insert(tipo, nome, telefone);

      alert('Contato cadastrado com sucesso!');

      listContacts.push(novoContato);
      setListContacts(listContacts);
    }

    closeModal();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);

    setId(null);
    setTipo('');
    setNome('');
    setTelefone('');
  };

  const editar = (contato) => {
    setId(contato.id);
    setTipo(contato.tipo);
    setNome(contato.nome);
    setTelefone(contato.telefone);

    openModal();
  };

  return (
    <PaperProvider>
      <View style={{ height: 220, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={openModal} 
          mode="contained" 
          style={{
            width:'80%', 
            backgroundColor: 'red',
            padding: 10,
        }}>
          ADICIONAR SOS
        </Button>
      </View>
      <FlatList
        data={listContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            {...item}
            onDelete={() => excluir(item.id)}
            onEdit={() => editar(item)}
            onPress={() => navigation.navigate('sos', item)}
          />
        )}
      />
      <Portal>
        <Dialog visible={showModal} onDismiss={closeModal}>
          <Dialog.Title>Novo Contato</Dialog.Title>
          <Dialog.Content>
            <TextInput
              mode="outlined"
              label="Tipo"
              value={tipo}
              onChangeText={(text) => setTipo(text)}
            />

            <TextInput
              mode="outlined"
              label="Nome"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />

            <TextInput
              mode="outlined"
              label="Telefone"
              keyboardType="phone-pad"
              value={telefone}
              render={(props) => (
                <MaskInput
                  {...props}
                  onChangeText={(masked, unmasked) => setTelefone(masked)}
                  mask={Masks.BRL_PHONE}
                />
              )}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={closeModal}>CANCELAR</Button>
            <Button onPress={salvar}>SALVAR</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
}
