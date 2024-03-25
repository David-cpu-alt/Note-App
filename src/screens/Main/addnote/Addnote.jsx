import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FormButton from '../../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'

const Addnote = () => {
    const [title, setTitle] = useState("")

    const [note, setNote] = useState("")
    const handleSaveNote = async () => {
        try {
            await AsyncStorage.setItem("title", title)
            await AsyncStorage.setItem("note", note)
            navigation.navigate("createnote")
        } catch (error) {
            console.log("Error during saving note is", error)
        }
    }
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <Text></Text>
            <TextInput
                style={styles.textInput}
                placeholder='Enter your title'
                value={title}
                onChangeText={setTitle} />

            <TextInput
                style={styles.textInput2}
                placeholder='Enter your note'
                value={note}
                onChangeText={setNote}
                multiline />
            <View style={{ marginTop: SIZES.width }}>
                <FormButton title={"Add note"} onPress={handleSaveNote} />
            </View>

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