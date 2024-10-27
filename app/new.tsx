import { theme } from '@/theme'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function NewScreen() {
    return (
        <View
            style={styles.container}
        >
            <Text>New Plant</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colorWhite,
        justifyContent: "center",
        alignItems: "center"
    }
})