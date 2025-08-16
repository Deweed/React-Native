import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function MyButton({title='?', color='#24CBAF', onPress}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 13,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold'
  }
})