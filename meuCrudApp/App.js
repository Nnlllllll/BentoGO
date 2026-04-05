import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Principal' }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: true, title: 'Mapa 3D' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}