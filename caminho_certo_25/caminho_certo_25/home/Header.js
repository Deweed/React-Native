import {View, Text, StyleSheet, Image} from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.titletext}>
        <Text style={styles.title}>Caminho </Text>
        <Text style={styles.text}>Certo</Text>
      </View>
      <Image style={styles.img} source={require('../assets/logo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: '#24CBAF',
    padding: 60,
    gap: 10,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
  },
  title: {
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  }, 
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white'
  },
  img: {
    width: 155,
    height: 155,
    borderRadius: 100
  },

  titletext: {
    flexDirection: 'row'
  }
})