import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Dimension } from '../../../utils'

const FeaturedItems = ({img, name}) => {
    return (
        <View style={styles.container}>
            <Image source={img} style={styles.img}/>
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default FeaturedItems

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundCard,
        width: Dimension.width / 3 - 25,
        height: Dimension.width / 3,
        alignItems: 'center',
        paddingBottom: 15,
        marginTop: 30,
        borderRadius: 20,
        justifyContent: 'flex-end',
        marginRight: 20,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginBottom: 10
    },
    img: {
        width: 60,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: -30,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
    },
    name: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    }
})
