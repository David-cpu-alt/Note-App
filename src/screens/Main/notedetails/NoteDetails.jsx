import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SIZES } from '../../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { updateNote } from '../../../redux/actions/noteAction'
import FormButton from '../../../components/Button/FormButton'
import { useDispatch } from 'react-redux'

const NoteDetails = ({ route }) => {

    const dispatch = useDispatch();
    const { title, note } = route.params.item
    const [editedTitle, setEditedTitle] = React.useState(title)
    const [editedNote, setEditedNote] = React.useState(note)

    const handleUpdateNote = async () => {
        try {
            dispatch(updateNote({ ...body }))
        } catch (error) {
            console.log("Error in updating note", error)
        }
    }
    return (
        <View style={styles.page}>
            <Text>{title}</Text>

            <TextInput
                style={styles.TextInput}
                value={editedTitle}
                onChangeText={setEditedTitle} />
            <TextInput
                style={[styles.TextInput, styles.textInput2]}
                value={editedNote}
                onChangeText={setEditedNote}
                multiline={true} />
            <View style={{ marginTop: SIZES.h1 * 2.5 }}>
                <FormButton title={"Update Note"} onPress={handleUpdateNote} />
            </View>

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
        marginBottom: SIZES.h3
    },
    textInput2: {
        height: SIZES.height * 0.5
    },

})