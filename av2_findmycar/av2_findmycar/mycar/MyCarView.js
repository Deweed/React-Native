import React, { useRef } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function MyCarView({ vagaSalva, localizacaoUsuario, onVoltar }) {
  const mapaRef = useRef(null);

  const ajustarMapa = () => {
    if (!mapaRef.current || !localizacaoUsuario || !vagaSalva) {
      return;
    }
    mapaRef.current.fitToCoordinates(
      [
        {
          latitude: localizacaoUsuario.latitude,
          longitude: localizacaoUsuario.longitude,
        },
        { latitude: vagaSalva.latitude, longitude: vagaSalva.longitude },
      ],
      {
        edgePadding: { top: 100, right: 50, bottom: 50, left: 50 },
        animated: true,
      }
    );
  };

  return (
    <View style={styles.containerMapa}>
      <MapView
        ref={mapaRef}
        style={styles.mapa}
        provider={PROVIDER_GOOGLE}
        onMapReady={ajustarMapa}
        initialRegion={{
          latitude: vagaSalva.latitude,
          longitude: vagaSalva.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
      >
        {}
        <Marker coordinate={vagaSalva} title="SEU CARRO!"><FontAwesome6 name="car-side" size={24} color="#1e3a8a" /></Marker>
      </MapView>
      <TouchableOpacity style={styles.botaoVoltar} onPress={onVoltar}>
        <Text style={styles.textoBotaoVoltar}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMapa: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  mapa: { 
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 30,
  },

  botaoVoltar: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 70 : 50,
    left: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  textoBotaoVoltar: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#1e3a8a' 
  },

});
