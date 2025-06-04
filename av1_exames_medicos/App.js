import ContactsView from './exame/exameView';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen
          name="exames"
          component={ContactsView}
          options={examsOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const defaultOptions = {
  headerStyle: {
    backgroundColor: '#7FFFD4',
  },
};

const homeOptions = {
  headerShown: false,
};

const examsOptions = {
  headerShown: false,
};
