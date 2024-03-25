import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Forminput from '../../components/input/Forminput'
import FormButton from '../../components/Button/FormButton'
import { COLORS, SIZES, images } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import Header from '../../components/Header/Header'

const Login = () => {
    const [name, setName] = useState("")
    const [password, SetPassword] = useState("")
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
            <Header />
            <Image source={images.pass} style={{ height: SIZES.height * 0.3, width: SIZES.width, marginTop: SIZES.h3, resizeMode: "contain" }} />
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
                <FormButton title={"Log in"}
                    onPress={() => navigation.navigate("createnote")} />

            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: SIZES.h3,
        // justifyContent: "center",
        flex: 1,

        backgroundColor: "white",


    }
})