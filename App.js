import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import { Tabs } from './src/navigator/Tabs';


export const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
