import { StyleSheet, Text, View, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS, SIZES, images } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'


const Splash = () => {
    const selector = useSelector(state => state?.note)
    console.log('.......', selector)
    useEffect(() => {
        const timer = setTimeout(() => {

            navigation.navigate("signin")
        }, 1000)
        return () => clearTimeout(timer)
    }, [])
    const navigation = useNavigation();
    return (
        < SafeAreaView style={styles.page}>
            <ImageBackground source={images.win} style={{ height: SIZES.height * 0.8, width: SIZES.width, }} >

            </ImageBackground>
        </ SafeAreaView>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: SIZES.h5,
        backgroundColor: COLORS.white,
        alignItems: "center"
    }
})