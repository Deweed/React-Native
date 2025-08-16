import { View, Text, StyleSheet, Button } from 'react-native';
import MyButton from './MyButton'
import Header from './Header'

export default function HomeView({navigation}) {
  return (
    <View style={styles.container}>
     <Header />

      <View style={styles.buttons}>
        <MyButton
          title="sos"
          color="red"
          onPress={() => navigation.navigate('contacts')}
        />
        <MyButton 
          title="registro"  
          onPress={() => navigation.navigate('registro')}/>
        <MyButton title="rastreio"  />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttons: {
    top: -40,
    padding: 15,
    justifyContent: 'space-around',
    height: '50%'
  }
});
