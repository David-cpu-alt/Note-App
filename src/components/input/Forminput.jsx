import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SIZES, FONTS } from '../../constants'

const Forminput = ({ title, onChangeText, keyboardType, placeholder }) => {
    return (
        <View>
            <Text style={{ ...FONTS.body5 }}>{title}</Text>
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
        marginVertical: SIZES.h5,
        paddingLeft: SIZES.h3,
        ...FONTS.body4,
        borderRadius: SIZES.base
    }

})