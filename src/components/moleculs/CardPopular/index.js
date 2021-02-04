import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IlP1 } from '../../../assets/images/index.'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { Colors, Dimension } from '../../../utils'

const CardPopular = ({img, name, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress}> 
            <Image source={img} style={styles.img}/>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.action}>
                <View style={styles.rating}>
                    <Octicons name='star' size={15} style={styles.star}/>
                    <Octicons name='star' size={15} style={styles.star}/>
                    <Octicons name='star' size={15} style={styles.star}/>
                    <Octicons name='star' size={15} style={styles.star}/>
                    <Octicons name='star' size={15} style={styles.star}/>
                </View>
                <View style={styles.button}>
                    <Feather name='chevron-right' size={15} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default CardPopular

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingLeft: 10,
        paddingRight: 20,
        marginRight: 50,
        backgroundColor: Colors.backgroundCard,
        height: Dimension.height / 4,
        width: Dimension.height / 5.5,
        borderRadius: 20,
        paddingBottom: 20,
        justifyContent: 'flex-end',
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginBottom: 20,
    },
    img: {
        width: 150,
        height: 180,
        position: 'absolute',
        resizeMode: 'contain',
        top: -60,
        right: -70,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        
    },
    title: {
        color: Colors.black,
        fontWeight: '700',
        fontSize: 16
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    rating: {
        flexDirection: 'row'
    },
    star: {
        color: 'yellow',
        marginRight: 2
    },
    button: {
        width: 25,
        height: 25,
        borderRadius: 25/2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
    }
})
