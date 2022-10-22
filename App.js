/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import HeartOfTheMatter from './src/screens/heart-of-the-matter/HeartOfTheMatter';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HeartOfTheMatter" component={HeartOfTheMatter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
