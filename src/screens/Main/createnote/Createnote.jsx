import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const Createnote = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <Text>Createnote</Text>
            <TouchableOpacity onPress={() => navigation.navigate("addnote")}>
                <Image source={images.plus} style={{ height: SIZES.height * 0.1, justifyContent: "center", width: SIZES.width, resizeMode: "contain" }} />

            </TouchableOpacity>

        </View>
    )
}

export default Createnote

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})