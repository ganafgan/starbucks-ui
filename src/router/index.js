import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Cart, Details, Home } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Cart'
                component={Cart}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Details'
                component={Details}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
