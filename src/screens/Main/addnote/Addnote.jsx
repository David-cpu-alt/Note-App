import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'

const Addnote = () => {
    // const [title, setTitle] = useState("")
    // console.log(title)
    const [note, setNote] = useState("")
    return (
        <View style={styles.page}>
            <Text></Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter your title' />

            <TextInput
                style={styles.textInput2}
                placeholder='Enter your note' />
        </View>
    )
}

export default Addnote

const styles = StyleSheet.create({
    textInput: {
        height: SIZES.h1 * 2.5,
        borderWidth: 0.5,
        borderRadius: SIZES.base,
        paddingLeft: SIZES.h3
    },
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.h3
    },
    textInput2: {
        padding: SIZES.h3 * 3,
        marginTop: SIZES.h3,
        borderWidth: 0.5,
        borderRadius: SIZES.base

    }
})