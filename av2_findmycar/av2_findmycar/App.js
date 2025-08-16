import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

import HomeView from './home/homeView';
import MyCarView from './mycar/MyCarView';

const VAGA_STORAGE_KEY = '@guardiao_de_vagas:vaga';

export default function App() {
  const [tela, setTela] = useState('Home');
  const [vaga, setVaga] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarVaga = async () => {
      try {
        const vagaJson = await AsyncStorage.getItem(VAGA_STORAGE_KEY);
        if (vagaJson) setVaga(JSON.parse(vagaJson));
      } catch (e) {
        console.error('Erro ao carregar vaga', e);
      } finally {
        setCarregando(false);
      }
    };
    carregarVaga();
  }, []);

  const obterLocalizacaoAtual = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        'Acesso negado!',
        'Você precisa autorizar a permissão de Localização!'
      );
      return null;
    }
    try {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });
      return coords;
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível obter a localização.');
      return null;
    }
  };

  const handleSalvarVaga = async () => {
    setCarregando(true);
    const coords = await obterLocalizacaoAtual();

    if (coords) {
      const novaVaga = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        timestamp: new Date().toISOString(),
      };
      await AsyncStorage.setItem(VAGA_STORAGE_KEY, JSON.stringify(novaVaga));
      setVaga(novaVaga);
      setLocalizacao(coords);
      setTela('Map');
    }
    setCarregando(false);
  };

  const handleLimparVaga = () => {
    Alert.alert(
      'Confirmar',
      'Você perderá seu carro, Tem certeza que quer limpar? ',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Sim',
          onPress: async () => {
            await AsyncStorage.removeItem(VAGA_STORAGE_KEY);
            setVaga(null);
          },
          style: 'destructive',
        },
      ]
    );
  };

  const handleVerNoMapa = async () => {
    setCarregando(true);
    const coords = await obterLocalizacaoAtual();
    if (coords) {
      setLocalizacao(coords);
      setTela('Map');
    }
    setCarregando(false);
  };

  if (carregando) {
    return (
      <View style={styles.containerCarregando}>
        <ActivityIndicator size="large" color="#0284c7" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      {tela === 'Home' ? (
        <HomeView
          vaga={vaga}
          onSalvarVaga={handleSalvarVaga}
          onLimparVaga={handleLimparVaga}
          onVerNoMapa={handleVerNoMapa}
        />
      ) : (
        <MyCarView
          vagaSalva={vaga}
          localizacaoUsuario={localizacao}
          onVoltar={() => setTela('Home')}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f0f4f8' },
  containerCarregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
