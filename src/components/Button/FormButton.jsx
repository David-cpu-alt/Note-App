import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const FormButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text>{title}</Text>
        </TouchableOpacity>


    )
}

export default FormButton

const styles = StyleSheet.create({
    button: {
        height: SIZES.h1 * 1.8,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base,
        alignItems: "center",
        justifyContent: "center"


    }
})