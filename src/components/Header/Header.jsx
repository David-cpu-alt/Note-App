import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES, icons } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
    const navigation = useNavigation();
    return (
        < SafeAreaView>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.arrowback} style={{ height: SIZES.h3, width: SIZES.h3 }} />
            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({})