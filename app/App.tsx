import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { RootProvider } from './src/context/root/root.context';


export default function App() {
  // The RootProvider is a lazy solution to make all Providers globally available (defined within)
  // App Navigator provides all routes within the app
  return (
    <RootProvider>
      <AppNavigator />
    </RootProvider>
  );
}