import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import { Colors } from '../../../utils'
import { Gap } from '../../atoms'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapperInput}>
                <Feather name='search' size={24} />
                <Gap width={5} />
                <TextInput 
                    placeholderTextColor={Colors.textInput}
                    placeholder='Search'
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    wrapperInput: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: Colors.bacgroundINput,
        borderRadius: 40
    }
})
