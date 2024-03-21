import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const input = () => {
    return (
        <View>
            <Text> {title}</Text>
            <TextInput
                placeholder='placeholder'
                onChangeText={onChangeText}
                keyboardType='keyboardType' />
        </View>
    )
}

export default input

const styles = StyleSheet.create({})