import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Card({nome, tipo, telefone, onPress, onDelete, onEdit}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={require('../assets/filha.png')} style={styles.img}/>
      <View style={styles.userInfo}>
        <Text style={styles.text}>{tipo}</Text>
        <Text style={[styles.text, styles.textStrong]}>{nome}</Text>
        <Text style={styles.text}>{telefone}</Text>
      </View>
      <View style={styles.icons}> 
        <TouchableOpacity onPress={onEdit}>
          <AntDesign name="edit" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <AntDesign name="deleteuser" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 2,
    gap: 10,
    alignItems: 'center',
  },
  img: {
    borderRadius: 25,
    height: 120,
  },
  text: {
    fontFamily: 'Times New Roman',
    fontSize: 16
  },
  textStrong: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userInfo: {
    flex: 1
  },
  icons: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  }
})