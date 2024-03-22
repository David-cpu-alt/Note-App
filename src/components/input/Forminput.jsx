import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const Forminput = ({ title, onChangeText, keyboardType, placeholder }) => {
    return (
        <View>
            <Text>{title}</Text>
            <TextInput
                placeholder={placeholder}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
                style={styles.box} />
        </View>
    )
}

export default Forminput

const styles = StyleSheet.create({
    box: {
        padding: SIZES.h6,
        borderWidth: 0.5,
        marginVertical: SIZES.h5
    }

})