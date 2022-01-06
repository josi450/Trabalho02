import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './src/screens/Form';
import Index from './src/screens/Index';
import Livros from './src/screens/Livros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Form"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Livros" component={Livros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#836FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
