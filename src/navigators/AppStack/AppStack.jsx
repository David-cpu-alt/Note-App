import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Createnote from '../../screens/Main/createnote/Createnote';
import Addnote from '../../screens/Main/addnote/Addnote';
import NoteDetails from '../../screens/Main/notedetails/NoteDetails';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="createnote" component={Createnote} />
            <Stack.Screen name="addnote" component={Addnote} />
            <Stack.Screen name="notedetails" component={NoteDetails} />
        </Stack.Navigator>
    )
}

export default AppStack

const styles = StyleSheet.create({})