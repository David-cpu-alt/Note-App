import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SIZES } from '../../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { updateNote } from '../../../redux/actions/noteAction'

const NoteDetails = ({ route }) => {
    const { item } = route.params
    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    useEffect(() => {
        fetchNote()
    }, [item])

    const fetchNote = async () => {
        try {
            const storedNote = await AsyncStorage.getItem("notes")
            if (storedNote) {
                const notesArray = JSON.parse(storedNote)
                const selectedNote = notesArray[item.index]
                setTitle(selectedNote.title)
                setNote(selectedNote.note)
            }
        } catch (error) {
            console.log("Error in getting note", error)
        }
    }
    return (
        <View style={styles.page}>
            <TextInput
                style={styles.TextInput}
                value={title}
                onChangeText={setTitle} />
            <TextInput
                value={note}
                onChangeText={setNote}
                multiline={true} />
        </View>
    )
}

export default NoteDetails

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: SIZES.h3,
    },
    TextInput: {
        padding: SIZES.h3,
        borderWidth: 0.5,
    }
})