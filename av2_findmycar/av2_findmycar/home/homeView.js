import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

const formatarData = (timestamp) => {
  if (!timestamp) return '';
  const data = new Date(timestamp);
  return data.toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
};

export default function HomeView({ vaga, onSalvarVaga, onLimparVaga, onVerNoMapa }) {

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Onde Parei?</Text>
      <Text style={styles.titulo2}>Seu anjo da Vaga para se lembrar</Text>
      <View style={styles.card}>
        {vaga ? (
          <>
            <Text style={styles.textoInfo}>Vaga salva em:</Text>
            <Text style={styles.textoData}>{formatarData(vaga.timestamp)}</Text>
            <TouchableOpacity
              style={styles.botaoPrincipal}
              onPress={onVerNoMapa}>
              <Text style={styles.textoBotao}>ACHAR MEU CARRO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botaoSecundario}
              onPress={onLimparVaga}>
              <Text style={styles.textoBotaoSecundario}>"limpar" - Tá comigo paizão</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.textoInfo}>Nenhum carro perdido!</Text>
            <TouchableOpacity
              style={[styles.botaoPrincipal, styles.botaoGrande]}
              onPress={onSalvarVaga}>
              <Text style={styles.textoBotao}>AJUDA O ESQUECIDO</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8',
  },

  titulo: {
    fontFamily: 'Georgia',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: 'rgba(0, 0, 0, 0.25)', 
    textShadowOffset: { width: 0, height: 2 }, 
    textShadowRadius: 4,
  },

  titulo2: {
    fontSize: 20, 
    color: '#475570', 
    top: -40,
  },

  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    minHeight: 220,
    justifyContent: 'center',
  },

  textoInfo: { 
    fontSize: 18, 
    color: '#475569', 
    marginBottom: 8 
  },

  textoData: {
    fontSize: 22,
    fontWeight: '600',
    color: '#0284c7',
    marginBottom: 24,
  },

  botaoPrincipal: {
    width: '100%',
    backgroundColor: '#0284c7',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },

  botaoGrande: { 
    paddingVertical: 20 
  },

  textoBotao: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },

  botaoSecundario: { 
    marginTop: 12, 
    padding: 10 
  },

  textoBotaoSecundario: { 
    color: '#ef4444', 
    fontSize: 16, 
    fontWeight: '500' 
  },

});
