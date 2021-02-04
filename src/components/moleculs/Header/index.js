import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../../utils'

const Header = ({name}) => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperGreeting}>
                <Text style={styles.greeting}>Good Morning</Text>
                <Feather name='grid' size={24} style={styles.icon} />
            </View>
            <View style={styles.wrapperName}>
                <Text style={styles.name}>{name}</Text>
                <Feather name='coffee' size={24} />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    wrapperGreeting: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        color: Colors.icon
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary
    },
    wrapperName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10
    }
})
