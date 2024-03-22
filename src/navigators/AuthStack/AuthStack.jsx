import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../../screens/Authscreen/Splash';
import Signin from '../../screens/Authscreen/Signin';
import Login from '../../screens/Authscreen/Login';
import Createnote from '../../screens/Main/createnote/Createnote';
import Addnote from '../../screens/Main/addnote/Addnote';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="signin" component={Signin} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="createnote" component={Createnote} />
            <Stack.Screen name="addnote" component={Addnote} />

        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})