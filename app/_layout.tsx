import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: 'EverList',
                headerStyle: {
                    backgroundColor: '#005db4',
                },
                headerTintColor: 'white',
            }} />
        </Stack>
    )
}

export default Layout