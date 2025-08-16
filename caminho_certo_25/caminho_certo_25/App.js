import HomeView from './home/HomeView';
import ContactsView from './contacts/ContactsView';
import SosView from './sos/SosView';
import RegistroView from './registro/RegistroView'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="home" 
          component={HomeView} 
          options={homeOptions} 
        />
        <Stack.Screen
          name="contacts"
          component={ContactsView}
          options={contactsOptions}
        />
        <Stack.Screen 
          name="sos" 
          component={SosView} 
        />
        <Stack.Screen 
          name="registro" 
          component={RegistroView} 
          options={registroOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#24CBAF',
  },
  headerTintColor: 'white',
};

const homeOptions = {
  headerShown: false,
};

const contactsOptions = {
  title: 'Selecione o contato',
};

const registroOptions = {
  title: 'Registre-se',
};
