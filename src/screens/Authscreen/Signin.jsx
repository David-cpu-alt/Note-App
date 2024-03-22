import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Forminput from '../../components/input/Forminput'
import { SIZES } from '../../constants'
import FormButton from '../../components/Button/FormButton'
import { useNavigation } from '@react-navigation/native'


const Signin = () => {
    const [name, setName] = useState("")
    const [password, SetPassword] = useState("")

    const navigation = useNavigation();
    return (
        <View style={styles.page} >

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
                    onPress={() => navigation.navigate("login")} />

            </View>


        </View>
    )
}

export default Signin

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: SIZES.h3,
        // justifyContent: "center",
        flex: 1,
        padding: SIZES.h3 * 4.8

    }
})