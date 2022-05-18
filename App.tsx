import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MemoListScreen from "./src/screens/MemoListScreen";
//import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
//import MemoCreateScreen from "./src/screens/MemoCreateScreen";
//import LogInScreen from "./src/screens/LoginScreen";
import SineUpScreen from "./src/screens/SineUpScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MemoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

