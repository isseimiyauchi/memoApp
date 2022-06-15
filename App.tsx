import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
require('firebase/firestore');

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import LogInScreen from "./src/screens/LoginScreen";
import SineUpScreen from "./src/screens/SineUpScreen";

import { firebaseConfig } from "./env";

const Stack = createStackNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  firebase.firestore().settings({ experimentalForceLongPolling: true });
}
export {firebase}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="SineUp"
       screenOptions={{
         headerStyle: { backgroundColor: '#467FD3' },
         headerTitleStyle: { color: '#FFFFFF' },
         headerTitle: 'Memo App',
         headerTintColor: '#FFFFFF',
         headerBackTitle: 'Back',
         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
       >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen 
          name="LogIn" 
          component={LogInScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
          }} 
        />
        <Stack.Screen 
          name="SineUp" 
          component={SineUpScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

