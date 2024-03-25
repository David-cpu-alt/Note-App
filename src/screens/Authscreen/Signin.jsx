import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Forminput from '../../components/input/Forminput'
import { SIZES, FONTS } from '../../constants'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../components/Header/Header'


const Signin = () => {
    const [name, setName] = useState("")
    const [password, SetPassword] = useState("")

    const navigation = useNavigation();
    // store name
    const handleCreateAccount = async () => {
        try {
            await AsyncStorage.setItem("name", name)
            console.log("name saved successfully", name)
            navigation.navigate("login")

        } catch (error) {
            console.log("Error during saving name", error)
        }
    }
    return (
        <View style={styles.page} >
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Header />
                <Text style={{ ...FONTS.body2, marginRight: SIZES.width * 0.48 }}>create Account</Text>
            </View>

            <View style={{ marginTop: SIZES.h2 * 3.3 }}>
                <Forminput title='Name'
                    placeholder={"Enter your name"}
                    value={name}
                    onChangeText={setName}
                    keyboardType={"default"} />
                <Forminput title='Password'
                    placeholder={"Enter your Password"}
                    value={password}
                    onChangeText={SetPassword}
                    keyboardType={"numeric"} />
                <View style={{ marginTop: SIZES.h3 * 3 }}>
                    <FormButton title={"create account"}
                        onPress={handleCreateAccount} />

                </View>
                {/* button view ends  */}
            </View>



        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    page: {
        // paddingHorizontal: SIZES.h3,
        // justifyContent: "center",
        flex: 1,
        padding: SIZES.h3

    }
})