import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, SIZES, icons, images, FONTS } from '../../../constants'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'


const Createnote = () => {
    const noteData = useSelector(state => state?.note)

    console.log('noteeeeeeeeeeeeeee', noteData)

    const [storedName, setStoredName] = useState("")


    useEffect(() => {
        getname();
        // getNote()
    }, [navigation])
    const getname = async () => {
        try {
            const name = await AsyncStorage.getItem("name")
            if (name !== null) {
                setStoredName(name)
            }
        } catch (error) {
            console.log("Error during getting name", error)
        }
    }

    const navigation = useNavigation();
    return (
        <View style={styles.page}>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ ...FONTS.body2, fontWeight: "bold" }}> Hi <Text style={{ ...FONTS.body5, color: COLORS.red }}>{storedName} </Text> </Text>
                <Image source={icons.waving} />
            </View>
            <View style={{ marginTop: SIZES.h3 }}>
                <FlatList
                    data={noteData}

                    renderItem={({ item, index }) => {
                        console.log('///////////', item)
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate("notedetails", { item })} style={{ padding: SIZES.h3, backgroundColor: COLORS.blue, marginBottom: SIZES.h3 }}>
                                <Text>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("addnote")}>
                <Image source={images.plus} style={{ height: SIZES.height * 0.1, justifyContent: "center", width: SIZES.width, resizeMode: "contain", marginTop: SIZES.width * 1.5, marginLeft: SIZES.height * 0.17 }} />

            </TouchableOpacity>

        </View>
    )
}

export default Createnote

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.h3,
    }
})