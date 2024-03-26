import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './src/navigators/AuthStack/AuthStack'
import AppStack from './src/navigators/AppStack/AppStack'

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"blue"} barStyle={"default"} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Authscreen' component={AuthStack} />
        <Stack.Screen name="AppStackScreen" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})