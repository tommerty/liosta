import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"

const Layout = () => {

    return (
        <Tabs>
            < Tabs.Screen name="index" options={{
                headerShown: true,
                title: 'Liosta',
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                ),
            }}
            />
            <Tabs.Screen name="about" options={{
                tabBarLabel: 'About',
                title: 'About',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="information-circle-outline" color={color} size={size} />
                ),
            }}
            />
        </Tabs>
    )
}

export default Layout