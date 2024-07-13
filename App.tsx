import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/presentation/pages/Login';
import { AppNavigation } from './src/presentation/navigation/AppNavigation';

export default function App() {
  return (
    <AppNavigation />
  );
}