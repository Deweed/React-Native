import {useEffect, useState} from 'react'

import * as Location from 'expo-location'

import {View, Text, StyleSheet} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import Ionicons from '@expo/vector-icons/Ionicons';

import * as Linking from 'expo-linking'

import {Button} from 'react-native-paper'

export default function SosView({navigation, route}) {
  const contato = route.params
  const [location, setLocation] = useState(null)

  navigation.setOptions({title: contato.nome})

  const getCurrentLocation = async () => {
    const {status} = await Location.requestForegroundPermissionsAsync()

    if(status !== 'granted') {
      alert('Você precisa habilitar o serviço de localização do seu celular.')
    } else {
      const {coords} = await Location.getCurrentPositionAsync()

      setLocation({
        ...coords,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001
      })
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  const sendLocation = () => {
    if(location) {
      const msg = `${contato.nome}, preciso URGENTE da sua ajuda!
      Estou neste lugar. https://www.google.com/maps/@${location.latitude},${location.longitude},15z`

      Linking.openURL(`whatsapp://send?text=${msg}&phone=+55${contato.telefone}`)

    } else {
      alert('Você precisa habilitar o serviço de localização do seu celular.')
    }
  }

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapView}
        initialRegion={location}
      >
        {
          location && 
              <Marker
                coordinate={location}
              >
                <Ionicons name="bus" size={24} color="black" />
              </Marker>
        }
      </MapView>

      <View style={styles.buttons}>
        <Button
          onPress={() => Linking.openURL(`tel:${contato.telefone}`)}
          mode="contained"
          style={{
            width: '60%',
            backgroundColor: 'darkred',
            padding: 5,
          }}>
          DISCAR
        </Button>

        <Button
          onPress={sendLocation}
          mode="contained"
          style={{
            width: "60%",
            backgroundColor: '#24CBAF',
            padding: 5,
          }}
        > 
          ENVIAR LOCALIZAÇÃO
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    width: '100%',
    height: '70%',
  },
  buttons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 300,
    paddingTop: 25,
    paddingBottom: 15,
    top: -40,
  },
});
