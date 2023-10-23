import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

const Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: true,
                    tabBarActiveBackgroundColor: '#8A69F3',
                    tabBarInactiveBackgroundColor: '#212121',
                    title: 'Liosta',
                    headerTitleStyle: {
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: '900',
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: '#212121', flex: 1 }} />
                    ),
                    tabBarLabel: 'Home',
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 15,
                        fontWeight: '900',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={'white'} size={size} />
                    ),
                    headerLeft: () => (
                        <Image
                            source={require('./../assets/icon.png')} // Replace with the path to your icon
                            style={{ width: 30, height: 30, marginLeft: 10, borderRadius: 100 }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    tabBarLabel: 'About',
                    tabBarActiveBackgroundColor: '#8A69F3',
                    tabBarInactiveBackgroundColor: '#212121',
                    tabBarLabelStyle: {
                        color: 'white',
                        fontSize: 15,
                        fontWeight: '900',
                    },
                    headerBackground: () => (
                        <View style={{ backgroundColor: '#212121', flex: 1 }} />
                    ),
                    title: 'About Liosta',
                    headerTitleStyle: {
                        color: '#fff',
                        fontSize: 20,
                        fontWeight: '900',
                    },
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="information-circle-outline" color={'white'} size={size} />
                    ),
                }}
            />
        </Tabs>
    )
}

export default Layout